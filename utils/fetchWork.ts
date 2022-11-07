import { Work } from "../typing";

export const fetchWork = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getWork`
  );

  const data = await res.json();
  const work: Work[] = data.work;

  return work;
};
