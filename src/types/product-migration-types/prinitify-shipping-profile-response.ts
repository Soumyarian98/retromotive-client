export interface PrintifyShippingProfileResponse {
  handling_time: HandlingTime;
  profiles: ProfilesEntity[];
}
export interface HandlingTime {
  value: number;
  unit: string;
}
export interface ProfilesEntity {
  variant_ids: number[];
  first_item: FirstItemOrAdditionalItems;
  additional_items: FirstItemOrAdditionalItems;
  countries: string[];
}
export interface FirstItemOrAdditionalItems {
  cost: number;
  currency: string;
}
