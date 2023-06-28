export interface ProductDetails {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from?: null;
  date_on_sale_from_gmt?: null;
  date_on_sale_to?: null;
  date_on_sale_to_gmt?: null;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads?: null[] | null;
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity?: null;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount?: null;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  upsell_ids?: null[] | null;
  cross_sell_ids?: null[] | null;
  parent_id: number;
  purchase_note: string;
  categories?: CategoriesEntity[] | null;
  tags?: null[] | null;
  images?: ImagesEntity[] | null;
  attributes?: AttributesEntity[] | null;
  default_attributes: DefaultAttributesEntity[];
  variations?: number[] | null;
  grouped_products?: null[] | null;
  menu_order: number;
  price_html: string;
  related_ids?: number[] | null;
  meta_data?: MetaDataEntity[] | null;
  stock_status: string;
  has_options: boolean;
  aioseo_notices?: null[] | null;
  product_variations?: ProductVariationsEntity[] | null;
  is_purchased: boolean;
  min_price: string;
  max_price: string;
  variation_products: VariationProductsEntity[];
  attributesData: AttributesDataEntity[];
  _links: Links;
  className: string;
}
export interface Dimensions {
  length: string;
  width: string;
  height: string;
}
export interface CategoriesEntity {
  id: number;
  name: string;
  slug: string;
}
export interface ImagesEntity {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}
export interface AttributesEntity {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
}
export interface DefaultAttributesEntity {
  id: number;
  name: string;
  option: string;
}
export interface MetaDataEntity {
  id: number;
  key: string;
  value: any;
}

export interface ProductVariationsEntity {
  id: number;
  on_sale: boolean;
  regular_price: number;
  sale_price: number;
  sku: string;
  quantity: string;
  stock?: null;
  attributes?: AttributesEntity1[] | null;
}
export interface AttributesEntity1 {
  name: string;
  slug: string;
  option: string;
}
export interface VariationProductsEntity {
  id: number;
  product_id: number;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from?: null;
  date_on_sale_to?: null;
  on_sale: boolean;
  in_stock: boolean;
  stock_quantity?: null;
  stock_status: string;
  feature_image: string;
  attributes_arr: AttributesArrEntity[];
}
export interface AttributesArrEntity {
  name: string;
  slug: string;
  attribute_name?: null;
}
export interface AttributesDataEntity {
  id: number;
  name: string;
  options?: OptionsEntity[] | null;
  position: number;
  visible: boolean;
  variation: boolean;
  is_visible: number;
  is_variation: number;
  is_taxonomy: number;
  value: string;
  label: string;
}
export interface OptionsEntity {
  name: string;
  slug: string;
}
export interface Links {
  self?: SelfEntityOrCollectionEntity[] | null;
  collection?: SelfEntityOrCollectionEntity[] | null;
}
export interface SelfEntityOrCollectionEntity {
  href: string;
}
