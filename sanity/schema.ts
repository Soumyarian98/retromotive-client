import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import article from "./schemas/article";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, post, author, category, blockContent],
};
