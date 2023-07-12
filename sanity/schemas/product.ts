import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Products",
  type: "document",
  initialValue: () => ({}),
  fields: [
    defineField({
      name: "printifyId",
      title: "Printify ID",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
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
      name: "attributes",
      title: "Attributes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "name" },
            {
              type: "array",
              name: "attributeEntities",
              of: [
                {
                  type: "object",
                  fields: [
                    { type: "string", name: "value" },
                    { type: "number", name: "printifyId" },
                    { type: "string", name: "color" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "sku" },
            { type: "string", name: "title" },
            { type: "number", name: "price" },
            { type: "number", name: "printifyId" },
            {
              type: "array",
              name: "attributeEntities",
              of: [{ type: "number" }],
            },
          ],
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
