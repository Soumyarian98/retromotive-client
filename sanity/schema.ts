import { type SchemaTypeDefinition } from "sanity";
import category from "./schemas/category";
import article from "./schemas/article";
import product from "./schemas/product";
import policy from "./schemas/policy";
import blockContent from "./schemas/blockContent";
import magazine from "./schemas/magazine";
import about from "./schemas/about";
import subscription from "./schemas/subscription";
import advertise from "./schemas/advertise";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    product,
    magazine,
    article,
    policy,
    blockContent,
    about,
    subscription,
    advertise,
  ],
};
