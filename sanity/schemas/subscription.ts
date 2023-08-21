import { defineField, defineType } from "sanity";

export default defineType({
  name: "subscription",
  title: "Subscription",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "string",
      name: "subtitle",
      title: "Subtitle",
    }),
    defineField({
      type: "array",
      name: "subscriptionPlans",
      title: "Subscription Plans",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title",
            },
            {
              type: "image",
              name: "featuredImage",
              title: "Featured Image",
            },
            {
              type: "number",
              name: "price",
              title: "Price",
            },
            {
              title: "Description",
              name: "description",
              type: "blockContent",
            },
          ],
        },
      ],
    }),
  ],
});
