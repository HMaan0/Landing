import Image from "next/image";

const Icon = ({
  src,
  w,
  h,
  p,
  innerP,
  innerW,
  innerH,
  imageWidth,
  imageHeight,
  shadow = true,
}: {
  src: string;
  w?: string;
  h?: string;
  p?: string;
  innerP?: string;
  innerW?: string;
  innerH?: string;
  imageWidth?: number;
  imageHeight?: number;
  shadow?: boolean;
}) => {
  return (
    <div
      className={`${p ? p : "p-1.5 md:p-2.5"} ${w ? w : "w-min"} ${h ? h : "h-min"} rounded-[20px] border flex justify-center items-center border-border-theme bg-[#FFFCEA] ${shadow && "shadow md:shadow-xl"}`}
    >
      <div
        className={`${innerP && innerP} rounded-[20px] ${innerW ? innerW : "w-[55px] md:w-[70px]"} ${innerH ? innerH : "h-[55px] md:h-[70px]"} bg-white border border-border-theme flex justify-center items-center`}
      >
        <Image
          src={src}
          alt={"Preswald Connectors"}
          width={imageWidth ? imageWidth : 40}
          height={imageHeight ? imageHeight : 40}
          priority={true}
          className="block md:hidden"
        />
        <Image
          src={src}
          alt={"Preswald Connectors"}
          width={imageWidth ? imageWidth : 50}
          height={imageHeight ? imageHeight : 50}
          priority={true}
          className="md:block hidden"
        />
      </div>
    </div>
  );
};
export default Icon;
