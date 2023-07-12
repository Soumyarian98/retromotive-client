import axios from "axios";
import { PrintifyWebhookPayload } from "@/types/product-migration-types/printify-webhook-payload";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrintifyProductEntity } from "@/types/product-migration-types/printify-product-response";
import { PrintifyShippingProfileResponse } from "@/types/product-migration-types/prinitify-shipping-profile-response";
import { nanoid } from "nanoid";

const prinitifyApiKey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjY4YWM5ZWIyOTFhN2ZkYjRhZjg1ZGM4NTIzMjA5N2YxM2FkYzk4ODViMjgyNTZlNzUyNmU3M2NlNmY1OTNhNmIwZGRjZTlkMTUzZmJjYWMwIiwiaWF0IjoxNjg4MDA4ODgyLjM4MDg1NSwibmJmIjoxNjg4MDA4ODgyLjM4MDg1OSwiZXhwIjoxNzE5NjMxMjgyLjM3NDY2NCwic3ViIjoiOTQ2OTM3NyIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AQpPZnEFVkq2poah2KdnKfi7lD0aMEyPBbIEHxJhb4pjqj8XcanQCNFGYc8kwbIJHV1-sg9eLBENv1NeN70";

const transformProduct = (
  p: PrintifyProductEntity,
  shippingData: PrintifyShippingProfileResponse
) => {
  const variantOptions = new Set<number>();
  const allVariants = p.variants.filter(v => v.is_available && v.is_enabled);
  allVariants.forEach(v => {
    v.options.forEach(o => {
      variantOptions.add(o);
    });
  });
  const allVariantIds = allVariants.map(v => v.id);
  return {
    _id: p.id,
    _type: "product",
    printifyId: p.id,
    title: p.title,
    attributes: p.options.map(a => {
      return {
        name: a.name,
        _key: nanoid(),
        attributeEntities: a.values
          .map(v => {
            if (!variantOptions.has(v.id)) return null;
            return {
              _key: nanoid(),
              printifyId: v.id,
              value: v.title,
              color: v.colors ? v.colors[0] : undefined,
            };
          })
          .filter(v => v !== null),
      };
    }),
    shippingProfileEntities: shippingData.profiles.map(s => {
      return {
        _key: nanoid(),
        firstItemCost: parseFloat((s.first_item.cost / 100).toFixed(2)),
        additionalItemsCost: parseFloat(
          (s.additional_items.cost / 100).toFixed(2)
        ),
        countries: s.countries,
        allowedVariantIds: s.variant_ids.filter(id =>
          allVariantIds.includes(id)
        ),
      };
    }),
    variants: p.variants
      .filter(p => p.is_available && p.is_enabled)
      .map(v => {
        return {
          _key: nanoid(),
          title: v.title,
          sku: v.sku,
          price: parseFloat((v.price / 100).toFixed(2)),
          printifyId: v.id,
          attributeEntities: v.options,
        };
      }),
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    resource: {
      id,
      data: { shop_id, action },
    },
  } = req.body as PrintifyWebhookPayload;

  const headers = {
    headers: {
      Authorization: `Bearer ${prinitifyApiKey}`,
    },
  };

  const productData = await axios.get<PrintifyProductEntity>(
    `https://api.printify.com/v1/shops/${shop_id}/products/${id}.json?limit=10&page=1`,
    headers
  );
  const productEntity = productData.data;
  const shippingProfile = await axios.get<PrintifyShippingProfileResponse>(
    `https://api.printify.com/v1/catalog/blueprints/${productEntity.blueprint_id}/print_providers/${productEntity.print_provider_id}/shipping.json`,
    headers
  );
  const shippingData = shippingProfile.data;

  const sanityProductEntity = transformProduct(productEntity, shippingData);

  const data = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    { mutations: [{ create: sanityProductEntity }] },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer skxsdQTXNR64ygYCAxKXzHoPBSYZUEYsjQ8DPwMSzRSiCzsr7qccUz0Yk1nDiARgtx6vXKRIcLBciPTD63DMPIJE8uAk44WoMOoc76lSbV4JpXnrZPh63bk93AumxvvVl8ccW1YenMaJttZ7QuK4aP5q4QoqC6VKUIdnKIDi3aucsymOEtcd`,
      },
    }
  );

  return res.status(200).json({ data: data.data });
}
