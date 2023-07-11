export interface SanityProduct {
  printifyId: string;
  title: string;
  slug: string;
  description: string;
  attributes: AttributesEntity[];
  variants: VariantsEntity[];
}
export interface AttributesEntity {
  name: string;
  attributeEntities: AttributeEntitiesEntity[];
}
export interface AttributeEntitiesEntity {
  color?: string | null;
  printifyId: number;
  value: string;
}
export interface VariantsEntity {
  sku: string;
  price: number;
  printifyId: number;
  attributeEntities: number[];
  shippingProfileEntities: ShippingProfileEntitiesEntity[];
}
export interface ShippingProfileEntitiesEntity {
  firstItemCost: number;
  additionalItemsCost: number;
  countries: string[];
}
