import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center xl:text-start text-center justify-between">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1">
            Hello I'm <br />
            <span className="text-accent">Achegnui Juven</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I exccel at crafting various digital experiences and I am proficient
            in various programming languages and technologies
          </p>
          {/* button and socials */}
          <div className="flex flex-col xl:flex-row  items-center  gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>

            <div className="mb-8 xl:mb-0 flex items-center justify-center xl:items-start xl:justify-start">
              <Social
                containerStyles="flex gap-6 "
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Home;
