// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { wooCommerceApi } from "@/lib/woo-commerce";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { data } = await wooCommerceApi.get("products", {
      per_page: 12,
      page: Number(req.query.page) || 1,
      category: Number(req.query.category) || 55,
    });

    res.status(200).json({ data });
  } catch (error: any) {
    console.log(error, "erroror");
    res.status(500).json({ error: error.message });
  }
}
