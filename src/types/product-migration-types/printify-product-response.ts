export interface PrintifyProductsResponse {
  current_page: number;
  data: PrintifyProductEntity[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links?: LinksEntity[] | null;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: null;
  to: number;
  total: number;
}
export interface PrintifyProductEntity {
  id: string;
  title: string;
  description: string;
  tags?: string[] | null;
  options: OptionsEntity[];
  variants: VariantsEntity[];
  images?: ImagesEntity[] | null;
  created_at: string;
  updated_at: string;
  visible: boolean;
  is_locked: boolean;
  external?: External | null;
  blueprint_id: number;
  user_id: number;
  shop_id: number;
  print_provider_id: number;
  print_areas?: PrintAreasEntity[] | null;
  print_details?: null[] | null;
  sales_channel_properties?: null[] | null;
  twodaydelivery_enabled: boolean;
}
export interface OptionsEntity {
  name: string;
  type: string;
  values: ValuesEntity[];
}
export interface ValuesEntity {
  id: number;
  title: string;
  colors?: string[] | null;
}
export interface VariantsEntity {
  id: number;
  sku: string;
  cost: number;
  price: number;
  title: string;
  grams: number;
  is_enabled: boolean;
  is_default: boolean;
  is_available: boolean;
  options: number[];
  quantity: number;
}
export interface ImagesEntity {
  src: string;
  variant_ids?: number[] | null;
  position: string;
  is_default: boolean;
  is_selected_for_publishing: boolean;
}
export interface External {
  id: string;
  handle: string;
}
export interface PrintAreasEntity {
  variant_ids?: number[] | null;
  placeholders?: PlaceholdersEntity[] | null;
  background?: string | null;
  font_color?: string | null;
  font_family?: string | null;
}
export interface PlaceholdersEntity {
  position: string;
  images?: (ImagesEntity1 | null)[] | null;
}
export interface ImagesEntity1 {
  id: string;
  name: string;
  type: string;
  height: number;
  width: number;
  x: number;
  y: number;
  scale: number;
  angle: number;
}
export interface LinksEntity {
  url?: string | null;
  label: string;
  active: boolean;
}
