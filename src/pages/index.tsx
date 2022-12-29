import { type NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniil Robnikov - Developer, Designer, Creator</title>
        <meta
          content="Full-stack web developer, JavaScript enthusiast, and problem solver with a passion for creating intuitive and user-friendly web applications."
          name="description"
        />
      </Head>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
