import { GraphQLClient, gql } from "graphql-request";

export const gqlClient = new GraphQLClient(
  process.env.HYGRAPH_CMS_MUTATION_URL as string,
  {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
    },
  }
);
