import { NextPage, GetServerSideProps } from "next";

import {
  Work as WorkData,
  Skills as SkillsData,
  AboutMe,
  PageInfoMe,
} from "../typing";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { fetchWork } from "../utils/fetchWork";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchAboutMe } from "../utils/fetchAboutMe";
import { fetchPageInfoMe } from "../utils/fetchPageInfoMe";

interface HomeProps {
  work: WorkData[];
  skills: SkillsData[];
  aboutMe: AboutMe;
  pageInfoMe: PageInfoMe;
}

const Home: NextPage<HomeProps> = ({ work, skills, aboutMe, pageInfoMe }) => {
  return (
    <>
      <div className="app">
        <NavBar />
        <Header />
        <About aboutMe={aboutMe} />
        <Skills skillsLists={skills} />
        <Work workList={work} />
        <Contact />
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const work: WorkData[] = await fetchWork();
  const skills: SkillsData[] = await fetchSkills();
  const aboutMe: AboutMe = await fetchAboutMe();
  const pageInfoMe: PageInfoMe = await fetchPageInfoMe();

  return {
    props: {
      work,
      skills,
      aboutMe,
      pageInfoMe,
    },
  };
};
