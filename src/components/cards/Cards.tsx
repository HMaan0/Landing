import Card from "./card/SingleCard";

const Cards = () => {
  return (
    <>
      <div className="flex 2xl:gap-15 lg:gap-10 gap-4 flex-col">
        <div className="flex 2xl:gap-15 lg:gap-10 gap-4 md:flex-row flex-col">
          <Card
            title="Automate Data Workflows"
            description="No-code ETL → 80% time saved Ditch manual scripting. Auto-ingest, clean, and transform data from CSVs, sheets, and databases."
          />
          <Card
            title="Unified Data Integration"
            description="Connect CSV, JSON, SQL, Sheets Sync financial data seamlessly. Cut copy-paste errors, ensure real-time accuracy."
          />
          <Card
            title="Real-time Dashboards"
            description="Python-built, auto-updating No third-party tools. Real-time metrics for executives, refreshed instantly."
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
