import Image from "next/image";

const Logo = ({ height, width }: { height: number; width: number }) => {
  return (
    <Image
      src={"logo.svg"}
      alt="Preswald"
      height={height}
      width={width}
      priority={true}
    />
  );
};

export default Logo;
