import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const wooCommerceApi = new WooCommerceRestApi({
  url: process.env.WP_BASE_URL as string,
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});
