import { DottedBackground } from "../ui/DottedBackground";
import Connectors from "./Connectors";

const ConnectorsOverview = () => {
  return (
    <>
      <DottedBackground>
        <div className="w-full flex justify-center items-center flex-col 2xl:gap-15 gap-10">
          <div className="flex flex-col 2xl:gap-4 gap-2 ">
            <div className="2xl:text-5xl md:text-4xl text-2xl font-medium text-center">
              Connect to multiple financial data sources
            </div>
            <p className="2xl:text-2xl md:text-xl text-lg text-text-theme font-medium text-center">
              Real-time financial insights for executives.Automate data
              processing and cleaning
            </p>
          </div>
          <Connectors />
        </div>
      </DottedBackground>
    </>
  );
};

export default ConnectorsOverview;
