import type { NextApiRequest, NextApiResponse } from "next";
import { wooCommerceApi } from "@/lib/woo-commerce";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { data } = await wooCommerceApi.get("products/categories", {
      per_page: 20,
    });
    res.status(200).json({ data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
