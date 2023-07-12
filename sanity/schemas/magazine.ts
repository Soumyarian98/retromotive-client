import { defineField, defineType } from "sanity";

export default defineType({
  name: "magazine",
  title: "Magazine",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "contentHandle",
      title: "Content Handle",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      title: "Categories",
      name: "category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    }),
    defineField({
      type: "array",
      name: "shippingProfileEntities",
      of: [
        {
          type: "object",
          fields: [
            { type: "number", name: "firstItemCost" },
            { type: "number", name: "additionalItemsCost" },
            {
              type: "array",
              name: "countries",
              of: [{ type: "string" }],
            },
            {
              type: "array",
              name: "allowedVariantIds",
              of: [{ type: "number" }],
            },
          ],
        },
      ],
    }),
  ],
});
