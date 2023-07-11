import { gql } from "graphql-request";

export const getAttributeEntityQuery = gql`
  query attributeEntity($printifyId: Int!) {
    attributeEntity(where: { printifyId: $printifyId }, stage: DRAFT) {
      id
      printifyId
    }
  }
`;

export const getShippingProfileQuery = gql`
  query shippingProfiles($blueprintId: Int!, $printProviderId: Int!) {
    shippingProfiles(
      where: { blueprintId: $blueprintId, printProviderId: $printProviderId }
    ) {
      id
    }
  }
`;
