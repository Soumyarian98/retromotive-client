import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import article from "./schemas/article";
import policy from "./schemas/policy";
import product from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, article, policy, post, author, category, blockContent],
};
