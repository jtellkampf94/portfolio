import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { AboutMe } from "../../typing";

const query = groq`
  *[_type == "aboutMe"] {..., about[] ->}
`;

type Data = {
  aboutMe: AboutMe[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const aboutMe: AboutMe[] = await sanityClient.fetch(query);

  res.status(200).json({ aboutMe });
}
