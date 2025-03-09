import Link from "next/link";
import CommandSnippet from "./CommandSnippet";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 2xl:gap-20  z-10">
      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href={"https://www.ycombinator.com/companies/structured-labs"}
          target={"_blank"}
          className="cursor-pointer"
        >
          <div>
            <p className="font-light text-sm md:mx-11.5 mx-9.5">Backed by</p>
            <div className="flex w-min justify-center items-center gap-3">
              <div className="flex items-center justify-center md:w-8 md:h-8 w-6 h-6 bg-[#fb651e] text-white font-medium md:text-2xl text-xl text-center">
                Y
              </div>
              <p className="text-[#fb651e] md:text-xl text-lg ">Combinator</p>
            </div>
          </div>
        </Link>
        <div className="flex w-full gap-2.5 2xl:gap-10 flex-col justify-center items-center 2xl:px-32 px-0">
          <p className="font-semibold 2xl:text-7xl md:text-5xl text-4xl text-center">
            Build and deploy data apps
          </p>
          <p className="md:block hidden 2xl:block md:text-2xl 2xl:text-3xl text-text-theme text-center">
            Preswald is the fastest way to turn Python scripts into interactive
            apps, dashboards, and internal tools. Develop locally, deploy in one
            command, and share instantly.
          </p>
          <p className="md:hidden text-lg  text-text-theme text-center">
            Preswald quickly converts Python scripts into apps, dashboards, and
            tools develop locally, deploy instantly, and share.
          </p>
        </div>
      </div>
      <CommandSnippet />
    </div>
  );
};

export default Hero;
