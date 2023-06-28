import { defineField, defineType } from "sanity";

export default defineType({
  name: "policy",
  title: "Policy",
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
      name: "tabTitle",
      title: "Tab Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "title" },
            { type: "text", name: "description" },
            {
              title: "Formatted Description",
              name: "formattedDescription",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    }),
  ],
});
