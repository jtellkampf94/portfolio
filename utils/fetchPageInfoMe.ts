import { PageInfoMe } from "../typing";

export const fetchPageInfoMe = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfoMe`
  );

  const data = await res.json();
  const pageInfoMe: PageInfoMe = data.pageInfoMe[0];

  return pageInfoMe;
};
