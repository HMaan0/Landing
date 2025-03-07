import Button from "@/components/button/Button";
import GithubInfo from "./githubInfo/GithubInfo";
import Link from "next/link";

const NavbarUtilities = () => {
  return (
    <div className="flex gap-5 justify-center items-center lg:flex-row flex-col-reverse ">
      <GithubInfo />
      <Link
        href={"https://app.preswald.com/"}
        target="_blank"
        className="lg:w-fit w-full"
      >
        <Button className="bg-black text-white hover:bg-black/85">
          Get started
        </Button>
      </Link>
      <Link
        href={"https://cal.com/amruthagujjar"}
        target="_blank"
        className="lg:w-fit w-full"
      >
        <Button className="hover:bg-black/10 bg-white">Book a demo</Button>
      </Link>
    </div>
  );
};

export default NavbarUtilities;
