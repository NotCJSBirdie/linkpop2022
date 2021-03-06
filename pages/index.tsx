import type { NextPage } from "next";
import Head from "next/head";
import AnalyzeIt from "./components/AnalyzeIt";
import Community from "./components/Community";
import Create from "./components/Create";
import FAQ1 from "./components/FAQ1";
import FAQ2 from "./components/FAQ2";
import FAQ3 from "./components/FAQ3";
import FAQ4 from "./components/FAQ4";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MakeIt from "./components/MakeIt";
import MonetizeIt from "./components/MonetizeIt";
import Question10 from "./components/Question10";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Question7 from "./components/Question7";
import Question8 from "./components/Question8";
import Question9 from "./components/Question9";
import QuestionTitle from "./components/QuestionTitle";
import ShareIt from "./components/ShareIt";
// import "~video-react/dist/video-react.css";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Head>
        <title>Linkpop Shopify 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <Create />

      <MakeIt />

      <MonetizeIt />

      <ShareIt />

      <AnalyzeIt />

      <Community />

      <QuestionTitle />

      <FAQ1 />

      <FAQ2 />

      <FAQ3 />

      <FAQ4 />

      <Question5 />

      <Question6 />

      <Question7 />

      <Question8 />

      <Question9 />

      <Question10 />

      <GetStarted />

      <Footer />
    </div>
  );
};

export default Home;
