export interface PrintifyWebhookPayload {
  id: string;
  type: string;
  created_at: string;
  resource: Resource;
}
export interface Resource {
  id: string;
  type: string;
  data: Data;
}
export interface Data {
  shop_id: number;
  publish_details: PublishDetails;
  action: string;
  out_of_stock_publishing: number;
  external_sku_mapping: null[] | null;
}
export interface PublishDetails {
  title: boolean;
  variants: boolean;
  description: boolean;
  tags: boolean;
  images: boolean;
  key_features: boolean;
  shipping_template: boolean;
  shipping_methods: number[];
}
