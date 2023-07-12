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
    const groq = `*[_type == "product" && printifyId=""]`;
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
