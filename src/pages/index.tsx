/* import Footer from "../components/Footer"; */
import Navbar from "../components/navbar/Navbar";
/* import Resources from "../components/sections/resources/Resources"; */
/* import Explore from "../components/sections/explore/Explore"; */
/* import Join from "../components/sections/join/Join";
import Creators from "../components/sections/creators/Creators";
import Hero from "../components/sections/hero/Hero"; */
import { useGlobalStore } from "../store/useGlobalStore";
import Loading from "../components/Loading";
import React, { Fragment, Suspense } from "react";
const Resources = React.lazy(
  () => import("../components/sections/resources/Resources")
);
const Explore = React.lazy(
  () => import("../components/sections/explore/Explore")
);
const Join = React.lazy(() => import("../components/sections/join/Join"));
const Creators = React.lazy(
  () => import("../components/sections/creators/Creators")
);
const Hero = React.lazy(() => import("../components/sections/hero/Hero"));
const Footer = React.lazy(() => import("../components/Footer"));

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
          <Suspense>
            <Hero />
          </Suspense>
          <Suspense>
            <Explore />
          </Suspense>
          <Suspense>
            <Resources />
          </Suspense>
          <Suspense>
            <Creators />
          </Suspense>
          <Suspense>
            <Join />
          </Suspense>

          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
}
