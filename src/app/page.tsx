import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Cards from "@/components/cards/Cards";
import Footer from "@/components/footer/Footer";
import AppearAnimation from "@/components/framer/AppearAnimation";
import { GridBackgroundDemo } from "@/components/ui/Grids";
import ImageAnimation from "@/components/framer/ImageAnimation";
import ConnectorsOverview from "@/components/connectors/ConnectorsOverview";
import ScrollAnimation from "@/components/framer/ScrollAnimation";
import BookDemo from "@/components/cards/card/BookDemo";
export default function Home() {
  return (
    <>
      <header className="sticky top-5 z-40 px-5 2xl:px-44 xl:px-20 w-full flex justify-center items-center mt-5">
        <AppearAnimation>
          <Navbar />
        </AppearAnimation>
      </header>
      <main className=" 2xl:px-44 xl:px-20 px-5 xl:py-10 py-5 flex flex-col items-center justify-center gap-36 2xl:gap-48 sm:mt-0 mt-14">
        <section className="flex justify-center items-center">
          <GridBackgroundDemo>
            <Hero />
          </GridBackgroundDemo>
        </section>
        <section className="w-full flex justify-start items-center">
          <ImageAnimation />
        </section>
        <section className="h-full w-full">
          <ScrollAnimation />
        </section>
        <section className="w-full ">
          <ConnectorsOverview />
        </section>
        <section className="flex flex-col w-full justify-center items-center 2xl:gap-15 lg:gap-10 gap-4">
          <Cards />
          <BookDemo />
        </section>
      </main>
      <Footer />
    </>
  );
}
