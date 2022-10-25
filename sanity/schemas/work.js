export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "skillList",
      title: "SkillList",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "reference", to: { type: "workDescription" } }],
    },
    {
      name: "code",
      title: "Code",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "string",
    },
  ],
};
