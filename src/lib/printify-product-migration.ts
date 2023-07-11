import { PrintifyProductEntity } from "@/types/product-migration-types/printify-product-response";
import { gqlClient } from "./hygraph-graphql-client";
import async from "async";
import {
  createAttributeEntityMutation,
  createProductMutationQuery,
  createShippingProfileMutation,
  updateAttributeEntityMutation,
} from "@/graphql/mutations";
import { CreateProductResponse } from "@/types/product-migration-types/create-product-reponse";
import {
  getAttributeEntityQuery,
  getShippingProfileQuery,
} from "@/graphql/query";
import { PrintifyShippingProfileResponse } from "@/types/product-migration-types/prinitify-shipping-profile-response";

interface UpdatedVariant {
  printifyId: number;
  sku: string;
  cost: number;
  price: number;
}

interface UpdatedProduct {
  title: string;
  description: string;
  printifyId: string;
  variants: UpdatedVariant[];
  attributes: {
    name: string;
    type: string;
  }[];
}

interface AttributeEntityPayload {
  attributeId: string;
  variantId: string;
  printifyId: number;
  value: string;
}

export class PrintifyMigration {
  printifyProduct: PrintifyProductEntity;
  creteProductResponse?: CreateProductResponse;
  constructor(p: PrintifyProductEntity) {
    this.printifyProduct = p;
  }

  private getAttributeEntity = async (printifyId: number) => {
    const result: any = await gqlClient.request(getAttributeEntityQuery, {
      printifyId,
    });
    return result.attributeEntity;
  };

  private createAttributeEntity = async (variables: AttributeEntityPayload) => {
    const attributeEntity = await this.getAttributeEntity(variables.printifyId);
    let mutationQuery;
    if (attributeEntity) {
      mutationQuery = updateAttributeEntityMutation;
    } else {
      mutationQuery = createAttributeEntityMutation;
    }
    return await gqlClient.request(mutationQuery, variables as any);
  };

  private assignAttribeEntityToVariant = async (
    createProductResponse: CreateProductResponse
  ) => {
    const {
      createProduct: { variants, attributes },
    } = createProductResponse;
    const prinitifyProduct = this.printifyProduct;
    let attributeEntities = prinitifyProduct.options
      .map(option => {
        const matchedAttribute = attributes.find(attribute => {
          return attribute.type === option.type;
        })!;
        return variants.map(v => {
          const prinitfyVariant = prinitifyProduct.variants.find(
            pv => pv.id === v.printifyId
          )!;
          const options = prinitfyVariant.options;
          const value = option.values.find(value => {
            return options.includes(value.id);
          })!;

          return {
            attributeId: matchedAttribute.id,
            variantId: v.id,
            printifyId: value.id,
            value: value.title,
          };
        });
      })
      .flat();
    await async.mapSeries(
      attributeEntities,
      async (a: AttributeEntityPayload) => await this.createAttributeEntity(a)
    );
  };

  private createHygraphProduct = async (variables: UpdatedProduct) => {
    const response = (await gqlClient.request(
      createProductMutationQuery,
      variables as any
    )) as CreateProductResponse;
    this.creteProductResponse = response;
    await this.assignAttribeEntityToVariant(response);
  };

  private getPrintifyShippingProfile = async () => {
    const product = this.printifyProduct;
    const result = await fetch("/api/get-printify-shipping-profile", {
      method: "POST",
      body: JSON.stringify({
        blueprint_id: product.blueprint_id,
        print_provider_id: product.print_provider_id,
      }),
    });
    const json = await result.json();
    return json as PrintifyShippingProfileResponse;
  };

  private getHygraphShippingProfile = async () => {
    const result: any = await gqlClient.request(getShippingProfileQuery, {
      blueprintId: this.printifyProduct.blueprint_id,
      printProviderId: this.printifyProduct.print_provider_id,
    });
    return result.shippingProfile;
  };

  private createHygraphShippingProfile = async () => {
    if (this.creteProductResponse) {
      const printifyShippingProfile = await this.getPrintifyShippingProfile();
      const hygraphShippingProfile = await this.getHygraphShippingProfile();
      const variants = this.creteProductResponse.createProduct.variants.map(
        v => v.printifyId
      );
      if (hygraphShippingProfile) {
      } else {
        const variables = {
          blueprintId: this.printifyProduct.blueprint_id,
          printProviderId: this.printifyProduct.print_provider_id,
          handlingTime: printifyShippingProfile.handling_time.value,
          productId: this.printifyProduct.id,
          shippingProfileEntities: printifyShippingProfile.profiles.map(e => {
            return {
              firstItemCost: e.first_item.cost,
              additionalItemsCost: e.additional_items.cost,
              countries: e.countries,
              variants: {
                connect: e.variant_ids
                  .filter(v => variants.includes(v))
                  .map(v => ({ printifyId: v })),
              },
            };
          }),
        };
        const result: any = await gqlClient.request(
          createShippingProfileMutation,
          variables
        );
      }
    }
  };

  migrateProduct = async () => {
    const product = this.printifyProduct;
    await this.createHygraphProduct({
      title: product.title,
      description: product.description,
      printifyId: product.id,
      variants: product.variants
        .filter(v => v.is_enabled && v.is_available)
        .map(variant => ({
          printifyId: variant.id,
          sku: variant.sku,
          cost: variant.cost,
          price: variant.price,
        })),
      attributes: product.options.map(option => ({
        name: option.name,
        type: option.type,
      })),
    });
    await this.createHygraphShippingProfile();
  };
}
