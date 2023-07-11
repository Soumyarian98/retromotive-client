import { samplePrintifyProducts } from "@/data/samplePrintifyProducts";
import { PrintifyMigration } from "@/lib/printify-product-migration";
import { Button } from "@mui/material";
import React from "react";
import { client } from "../../../sanity/lib/client";
import { SanityProduct } from "@/types/sanity-product";
import { webhookPayload } from "@/data/webhook-payload";
import { PrintifyWebhookPayload } from "@/types/product-migration-types/printify-webhook-payload";
import axios from "axios";

const Migration = () => {
  const migrate = async () => {
    axios
      .post("/api/migration", webhookPayload)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    // const migrationData = samplePrintifyProducts.slice(0, 2).map(p => {
    //   return {
    //     _type: "product",
    //     printifyId: p.id,
    //     title: p.title,
    //     attributes: p.options.map(a => {
    //       return {
    //         name: a.name,
    //         attributeEntities: a.values.map(v => {
    //           return {
    //             printifyId: v.id,
    //             value: v.title,
    //             color: v.colors ? v.colors[0] : undefined,
    //           };
    //         }),
    //       };
    //     }),
    //     variants: p.variants.map(v => {
    //       return {
    //         sku: v.sku,
    //         price: v.price,
    //         printifyId: v.id,
    //         attributeEntities: v.options,
    //         shippingProfileEntities: [],
    //       };
    //     }),
    //   };
    // });
    // fetch(
    //   `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    //   {
    //     method: "post",
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Bearer skLvT476E8zEZNzIifYnKOi6RMnS0zycFRKCvLBunDP85U9CfFVoOR9iOg51L7J7pWxtDM3Y7wcjErFsbyEPVf4gflxBZTjtRKAuR5WlpZ84Si7JEtmOpj9hvoJrJoA7UW1Y76F5ANwIShGOfxzC4sC7nmVX4GjncaoGgkUNaEQqxvGzzdGV`,
    //     },
    //     body: JSON.stringify({
    //       mutations: migrationData.map(p => ({ create: p })),
    //     }),
    //   }
    // )
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.error(error));
  };
  return (
    <div>
      <Button onClick={migrate}>Run Migration</Button>
    </div>
  );
};

export default Migration;

//pid: cljirgx4q1ahc0b2q1egl5uvi
//attributeId: cljirj52918xm0c2zeshmrnbe
//attributeEntityId: [cljirnx8d1b2s0b2qycwtjwa0, cljiro7yz198y0b2my876y4oj]
