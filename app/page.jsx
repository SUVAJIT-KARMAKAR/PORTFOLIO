// PAGE @IMPORTS
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// COMPONENTS 
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Statistics from "@/components/Statistics";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full"> 
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXT-SECTION */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-s"> FULL-STACK DEVELOPER & DATA-ANALYST </span>
            <h1 className="h1 mb-6"> HELLO I&apos;M <br/> <span className="text-accent"> SUVAJIT KARMAKAR </span> </h1>
            <p className="max-w-[500px] mb-9 text-white/60"> 
              I excel at crafting excellent digital experiences and I am proficient in various programming languages and technologies.
            </p>

            {/* BUTTONS & SOCIALS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
              >
                <span> DOWNLOD CV </span>
                <FiDownload className="text-xl"/>
              </Button>
              
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>

            </div>

          </div>
          {/* PHOTO-SECTION */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0"/>
          </div>
        </div>
      </div>

      {/* STATISTICS OF THE PROFILE */}
      <Statistics/>
    </section>
  );
};

// EXPORTING PAGES 
export default Home;