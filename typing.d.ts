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

export interface PageInfoMe extends SanityBody {
  _type: "pageInfoMe";
  about: string;
  backgroundImage: Image;
  name: string;
  role: string;
}
