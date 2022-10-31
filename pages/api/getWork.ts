import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Work } from "../../typing";

const query = groq`
  *[_type == "pageInfoMe"]
`;

type Data = {
  work: Work[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const work: Work[] = await sanityClient.fetch(query);

  res.status(200).json({ work });
}
