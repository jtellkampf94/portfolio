export default {
  name: "aboutMe",
  title: "AboutMe",
  type: "document",
  fields: [
    {
      name: "aboutTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "about",
      title: "about",
      type: "array",
      of: [{ type: "reference", to: { type: "about" } }],
    },
    {
      name: "aboutImage",
      title: "Image",
      type: "image",
    },
  ],
};
