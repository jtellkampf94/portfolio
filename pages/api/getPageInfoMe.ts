import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfoMe } from "../../typing";

const query = groq`
  *[_type == "pageInfoMe"]
`;

type Data = {
  pageInfoMe: PageInfoMe[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfoMe: PageInfoMe[] = await sanityClient.fetch(query);

  res.status(200).json({ pageInfoMe });
}
