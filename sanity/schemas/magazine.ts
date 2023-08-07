import { defineField, defineType } from "sanity";
import { countries } from "countries-list";
import CurrencyList from "currency-list";
import currencyCodes from "currency-codes";

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
      type: "array",
      name: "price",
      title: "Price",
      of: [
        {
          type: "object",
          fields: [
            { type: "number", name: "value", title: "Value" },
            {
              title: "Currency",
              name: "currency",
              type: "string",
              options: {
                list: currencyCodes.data.map(d => ({
                  title: d.currency,
                  value: d.code,
                })),
              },
            },
          ],
        },
      ],
    }),

    defineField({
      title: "Release date",
      name: "releaseDate",
      type: "date",
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
              title: "Currency",
              name: "currency",
              type: "string",
              options: {
                list: currencyCodes.data.map(d => ({
                  title: d.currency,
                  value: d.code,
                })),
              },
            },
            {
              type: "array",
              name: "countries",
              of: [
                {
                  type: "string",
                  options: {
                    list: Object.entries(countries).map(([k, v]) => ({
                      title: v.name,
                      value: k,
                    })),
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
