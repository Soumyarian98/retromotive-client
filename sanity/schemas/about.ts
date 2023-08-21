import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Us",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "array",
      name: "contents",
      title: "Contents",
      of: [{ type: "string" }],
    }),
    defineField({
      type: "object",
      name: "teamSection",
      title: "Team Section",
      fields: [
        {
          type: "string",
          name: "title",
          title: "Title",
        },
        {
          type: "array",
          name: "teamMembers",
          title: "Team Members",
          of: [
            {
              type: "object",
              fields: [
                {
                  title: "Profile Image",
                  name: "profileImage",
                  type: "image",
                },
                {
                  title: "Name",
                  name: "userName",
                  type: "string",
                },
                {
                  title: "Role",
                  name: "role",
                  type: "string",
                },
                {
                  title: "Description",
                  name: "description",
                  type: "blockContent",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      type: "array",
      name: "otherContributors",
      title: "Other Contributors",
      of: [{ type: "string" }],
    }),
  ],
});
