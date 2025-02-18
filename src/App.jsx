import { ReactLenis } from "lenis/react";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// GSAP PLUGIN REGISTRATION
gsap.registerPlugin(useGSAP, ScrollTrigger);

// COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Review from "./components/Review/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // GSAP
  useGSAP(() => {
    const elements = gsap.utils.toArray(".revealup");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: '-200 bottom',
          end: 'bottom 80%'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};
export default App;
