import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "bannerTitle",
      title: "Banner Title",
      type: "object",
      fields: [
        {
          type: "string",
          name: "lineOne",
          title: "Line One",
        },
        {
          type: "string",
          name: "lineTwo",
          title: "Line Two",
        },
      ],
    }),
    defineField({
      type: "array",
      name: "bannerImages",
      title: "Banner Images",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Featured Image",
              name: "featuredImage",
              type: "image",
            },
            { type: "string", name: "title", title: "Title" },
            {
              type: "string",
              name: "description",
              title: "Description",
            },
            {
              type: "string",
              name: "redirectURL",
              title: "Redirect URL",
            },
          ],
        },
      ],
    }),
    defineField({
      type: "array",
      name: "carousel",
      title: "Carousel Images",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Featured Image",
              name: "featuredImage",
              type: "image",
            },
            { type: "string", name: "title", title: "title" },
            {
              type: "string",
              name: "description",
              title: "description",
            },
            {
              type: "string",
              name: "redirectURL",
              title: "Redirect URL",
            },
            {
              type: "string",
              name: "actionButtonName",
              title: "Action Button Name",
            },
          ],
        },
      ],
    }),
    defineField({
      title: "Quaterlies",
      name: "quaterlies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "magazine" }],
        },
      ],
    }),
    defineField({
      title: "Apparel",
      name: "apparel",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    }),
    defineField({
      title: "Articles",
      name: "articles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }],
        },
      ],
    }),
  ],
});
