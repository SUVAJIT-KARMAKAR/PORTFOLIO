// COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Review from "./components/Review/Review";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
    </>
  );
};
export default App;
