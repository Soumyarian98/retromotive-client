import type { NextApiRequest, NextApiResponse } from "next";
import { wooCommerceApi } from "@/lib/woo-commerce";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { id } = req.query;
    const { data } = await wooCommerceApi.get(`products/${id}`);
    res.status(200).json({ data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
