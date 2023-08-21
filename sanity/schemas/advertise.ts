import { defineField, defineType } from "sanity";

export default defineType({
  name: "advertise",
  title: "Advertise",
  type: "document",
  fields: [
    defineField({
      name: "bodyContent",
      title: "Body Content",
      type: "array",
      of: [
        {
          name: "imageCarousel",
          title: "Image Carousel",
          type: "object",
          fields: [
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [{ type: "image" }],
            },
            {
              name: "centered",
              title: "Centered",
              type: "boolean",
            },
          ],
        },
        {
          name: "imageGrid",
          title: "Image Grid",
          type: "object",
          fields: [
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [{ type: "image" }],
            },
            {
              name: "gridColumns",
              title: "Grid Columns",
              type: "number",
            },
          ],
        },
        {
          name: "paragraph",
          title: "Paragraph",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "text",
            },
          ],
        },
        {
          name: "quote",
          title: "Quote",
          type: "object",
          fields: [
            {
              name: "content",
              title: "Content",
              type: "text",
            },
            {
              name: "author",
              title: "Author",
              type: "string",
            },
            {
              name: "authorTitle",
              title: "Author Title",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
});
