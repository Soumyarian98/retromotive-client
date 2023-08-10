import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//3:40:00

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { items } = req.body;
    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: items.map((item: any) => {
        return {
          quantity: item.quantity,
          price_data: {
            currency: "aud",
            unit_amount: item.item.price[0].value * 100,
            product_data: {
              name: item.item.title,
              images: [sanityUrlBuiler(item.item.featuredImage).url()],
            },
          },
        };
      }),
      mode: "payment",
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Shipping Charges",
            type: "fixed_amount",
            fixed_amount: {
              amount: items.length * 10.0 * 100,
              currency: "aud",
            },
          },
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["AU", "US", "GB", "IN"],
      },
      success_url: `${req.headers.origin}/checkout?success=true`,
      cancel_url: `${req.headers.origin}/checkout?canceled=true`,
    };
    console.log(params.line_items?.map(l => l.price_data));
    try {
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);
      // if (checkoutSession.url) {
      // res.redirect(303, checkoutSession.url);
      // }
      res.status(200).json({ id: checkoutSession.id });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
