import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Experience />
        <Skills />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
