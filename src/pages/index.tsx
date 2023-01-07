import About from "@/ui/About";
import Contact from "@/ui/Contact";
import Footer from "@/ui/Footer";
import Hero from "@/ui/Hero";
import LogoClouds from "@/ui/LogoClouds";
import NavBarPlaceholder from "@/ui/NavBarPlaceholder";
import { type NextPage } from "next";
import Head from "next/head";

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
      <NavBarPlaceholder />
      <Hero />
      <About />
      <Contact />
      <LogoClouds />
      <Footer />
    </>
  );
};

export default Home;
