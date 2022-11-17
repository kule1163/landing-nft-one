import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Resources from "../components/sections/resources/Resources";
import Explore from "../components/sections/explore/Explore";
import Join from "../components/sections/join/Join";
import Creators from "../components/sections/creators/Creators";
import Hero from "../components/sections/hero/Hero";
import { useGlobalStore } from "../store/useGlobalStore";
import Loading from "../components/Loading";

export default function Home() {
  const { splineLoaded } = useGlobalStore();
  return (
    <>
      <div style={{ display: `${splineLoaded ? "none" : "flex"}` }}>
        <Loading />
      </div>
      <div
        style={{ display: `${splineLoaded ? "flex" : "none"}` }}
        className="flex flex-col bg-background overflow-hidden max-w-[100vw]"
      >
        <Navbar />
        <div id="hero" className="flex flex-col gap-[80px]">
          <Hero />
          <Explore />
          <Resources />
          <Creators />
          <Join />
          <Footer />
        </div>
      </div>
    </>
  );
}
