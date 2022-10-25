import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./pageInfo";
import workDescription from "./workDescription";
import skill from "./skill";
import skills from "./skills";
import work from "./work";
import aboutMe from "./aboutMe";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    skill,
    workDescription,
    skills,
    work,
    aboutMe,
    pageInfo,
  ]),
});
