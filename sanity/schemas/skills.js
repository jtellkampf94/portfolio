export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "skillList",
      title: "SkillList",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
