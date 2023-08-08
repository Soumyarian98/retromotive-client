import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const sanityUrlBuiler = (source: any) => {
  return builder.image(source);
};
