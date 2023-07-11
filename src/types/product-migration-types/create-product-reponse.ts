export interface CreateProductResponse {
  createProduct: CreateProduct;
}
export interface CreateProduct {
  id: string;
  variants: VariantsEntity[];
  attributes: AttributesEntity[];
}
export interface VariantsEntity {
  id: string;
  printifyId: number;
}
export interface AttributesEntity {
  name: string;
  id: string;
  type: string;
  attributeEntities: any[];
}
