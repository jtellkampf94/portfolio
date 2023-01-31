import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.scss";
import "../components/NavBar/index.scss";
import "../components/Header/index.scss";
import "../components/About/index.scss";
import "../components/Skills/index.scss";
import "../components/Work/index.scss";
import "../components/Contact/index.scss";
import "../components/Modal/index.scss";
import "../components/Loader/index.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Jonathan Tellkampf | Full stack web developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
