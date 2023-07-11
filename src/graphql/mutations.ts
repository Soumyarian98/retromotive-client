import { gql } from "graphql-request";

export const createProductMutationQuery = gql`
  mutation createProduct(
    $title: String
    $description: String!
    $printifyId: String!
    $variants: [VariantCreateInput!]
    $attributes: [AttributeCreateInput!]
  ) {
    createProduct(
      data: {
        title: $title
        description: $description
        printifyId: $printifyId
        variants: { create: $variants }
        attributes: { create: $attributes }
      }
    ) {
      id
      variants {
        id
        printifyId
      }
      attributes {
        name
        id
        type
        attributeEntities {
          printifyId
          id
          value
        }
      }
    }
  }
`;

export const updateAttributeEntityMutation = gql`
  mutation updateAttributeEntity(
    $printifyId: Int!
    $attributeId: ID!
    $variantId: ID!
    $value: String!
  ) {
    updateAttributeEntity(
      where: { printifyId: $printifyId }
      data: {
        attribute: { connect: { id: $attributeId } }
        variants: { connect: { where: { id: $variantId } } }
        value: $value
      }
    ) {
      id
      printifyId
    }
  }
`;

export const createAttributeEntityMutation = gql`
  mutation createAttributeEntity(
    $attributeId: ID!
    $variantId: ID!
    $value: String!
    $printifyId: Int!
  ) {
    createAttributeEntity(
      data: {
        attribute: { connect: { id: $attributeId } }
        variants: { connect: { id: $variantId } }
        value: $value
        printifyId: $printifyId
      }
    ) {
      id
      printifyId
    }
  }
`;

export const createShippingProfileMutation = gql`
  mutation createShippingProfile(
    $productId: String!
    $handlingTime: Int!
    $blueprintId: Int!
    $printProviderId: Int!
    $shippingProfileEntities: [ShippingProfileEntityCreateInput!]
  ) {
    createShippingProfile(
      data: {
        handlingTime: $handlingTime
        blueprintId: $blueprintId
        printProviderId: $printProviderId
        shippingProfileEntities: { create: $shippingProfileEntities }
        product: { connect: { printifyId: $productId } }
      }
    ) {
      id
    }
  }
`;
