import GlowingCurvedPath from "@/components/connectors/glowingPaths/GlowingCurvedPath";
import Icon from "./glowingPaths/Icon";

const Connectors = () => {
  return (
    <div className="flex">
      <div className="relative w-[150px] h-full md:w-[270px] lg:w-[306.5px] md:h-[400px] flex flex-col items-center justify-between ">
        <div className="flex items-start justify-end w-full h-full ">
          <Icon src="adobe.svg" />
          <div className="mt-[44px] md:block hidden">
            <GlowingCurvedPath path="M0 1V1C17.8544 1 32.3283 15.4739 32.3283 33.3283V105C32.3283 132.614 54.7141 155 82.3283 155H145" />
          </div>
          <div className="mt-[44px] block md:hidden">
            <GlowingCurvedPath
              path="M0 1V1C9.23506 1 16.7215 8.48649 16.7215 17.7216V105C16.7215 132.614 39.1073 155 66.7216 155H75"
              width="75"
              height="156"
              viewBox="0 0 75 156"
            />
          </div>
        </div>
        <div className="absolute w-full  items-center top-[154px]  md:flex hidden">
          <Icon src="bigquery.svg" />
          <GlowingCurvedPath
            path="M0 2L289.947 1.96019"
            width="216.5"
            height="3"
            viewBox="0 0 216.5 3"
          />
        </div>
        <div className="absolute w-full flex md:hidden items-center top-[165.5px]">
          <Icon src="bigquery.svg" />
          <GlowingCurvedPath
            path="M0 2L289.947 1.96019"
            width="216.5"
            height="3"
            viewBox="0 0 216.5 3"
          />
        </div>
        <div className="flex items-end justify-end w-full h-full">
          <Icon src="excel.svg" />
          <div className="mb-[44px] rotate-180 transform scale-x-[-1] md:block hidden">
            <GlowingCurvedPath path="M0 1V1C17.8544 1 32.3283 15.4739 32.3283 33.3283V105C32.3283 132.614 54.7141 155 82.3283 155H145" />
          </div>
          <div className="mb-[44px] block md:hidden rotate-180 transform scale-x-[-1]">
            <GlowingCurvedPath
              path="M0 1V1C9.23506 1 16.7215 8.48649 16.7215 17.7216V105C16.7215 132.614 39.1073 155 66.7216 155H75"
              width="75"
              height="156"
              viewBox="0 0 75 156"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-min h-min z-10">
          <div className="absolute  w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-radial from-[#ffe985] via-[#ffc41b] to-transparent rounded-[20px] blur-[10px] opacity-90"></div>
          <div className="relative md:flex items-center justify-center hidden">
            <Icon
              src="logo.svg"
              w="w-[140px]"
              h="h-[140px]"
              p="p-5"
              innerP="p-2.5"
              innerH="h-[100px]"
              innerW="w-[100px]"
              imageHeight={55}
              imageWidth={55}
              shadow={false}
            />
          </div>
          <div className="relative md:hidden items-center justify-center flex">
            <Icon
              src="logo.svg"
              w="w-[90px]"
              h="h-[90px]"
              p="p-3"
              innerP="p-1.5"
              innerH="h-[70px]"
              innerW="w-[70px]"
              imageHeight={40}
              imageWidth={40}
              shadow={false}
            />
          </div>
        </div>
      </div>
      <div className="relative w-[150px] lg:w-[306.5px] md:w-[270px] h-[400px] flex flex-col items-center justify-between">
        <div className="flex items-start justify-start w-full h-full">
          <div className="mt-[44px]  transform scale-x-[-1] md:block hidden">
            <GlowingCurvedPath path="M0 1V1C17.8544 1 32.3283 15.4739 32.3283 33.3283V105C32.3283 132.614 54.7141 155 82.3283 155H145" />
          </div>
          <div className="mt-[44px] transform scale-x-[-1] block md:hidden">
            <GlowingCurvedPath
              path="M0 1V1C9.23506 1 16.7215 8.48649 16.7215 17.7216V105C16.7215 132.614 39.1073 155 66.7216 155H75"
              width="75"
              height="156"
              viewBox="0 0 75 156"
            />
          </div>
          <Icon src="notion.svg" />
        </div>
        <div className="absolute w-full flex items-center top-[166] md:top-[154px] justify-end">
          <div className="rotate-180 md:flex hidden">
            <GlowingCurvedPath
              path="M0 2L289.947 1.96019"
              width="216.5"
              height="3"
              viewBox="0 0 216.5 3"
            />
          </div>
          <div className="rotate-180 flex md:hidden">
            <GlowingCurvedPath
              path="M0 2L289.947 1.96019"
              width="216.5"
              height="3"
              viewBox="0 0 216.5 3"
            />
          </div>
          <Icon src="sql.svg" />
        </div>
        <div className="flex items-end justify-start w-full h-full">
          <div className="mb-[44px] rotate-180 md:block hidden">
            <GlowingCurvedPath path="M0 1V1C17.8544 1 32.3283 15.4739 32.3283 33.3283V105C32.3283 132.614 54.7141 155 82.3283 155H145" />
          </div>
          <div className="mb-[44px] rotate-180 block md:hidden">
            <GlowingCurvedPath
              path="M0 1V1C9.23506 1 16.7215 8.48649 16.7215 17.7216V105C16.7215 132.614 39.1073 155 66.7216 155H75"
              width="75"
              height="156"
              viewBox="0 0 75 156"
            />
          </div>
          <Icon src="sheets.svg" />
        </div>
      </div>
    </div>
  );
};
export default Connectors;
