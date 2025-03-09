import Link from "next/link";
import Logo from "./logo/Logo";

const LogoTitle = () => {
  return (
    <Link
      href={"https://preswald.vercel.app"}
      className="cursor-pointer flex justify-center items-center"
    >
      <div className="flex gap-4 justify-center items-center">
        <Logo width={40} height={40} />
        <p className="font-bold xl:text-4xl text-2xl">Preswald</p>
      </div>
    </Link>
  );
};

export default LogoTitle;
