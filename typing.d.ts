interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface WorkDescription extends SanityBody {
  _type: "workDescription";
  description: string;
}

interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  skill: string;
}

export interface Work extends SanityBody {
  _type: "work";
  code: string;
  description: WorkDescription[];
  image: Image;
  role: string;
  skillList: Skill[];
  title: string;
  website: string;
}

export interface PageInfoMe extends SanityBody {
  _type: "pageInfoMe";
  about: string;
  backgroundImage: Image;
  name: string;
  role: string;
}
