import { AboutMe } from "../typing";

export const fetchAboutMe = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getAboutMe`
  );

  const data = await res.json();
  const aboutMe: AboutMe = data.aboutMe[0];

  return aboutMe;
};
