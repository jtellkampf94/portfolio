import { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <div className="app">
        <NavBar />
        <Header />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default Home;
