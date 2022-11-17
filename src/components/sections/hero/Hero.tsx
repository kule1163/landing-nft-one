import { HeroCont, PrimaryButton } from "../../styledComponents";
import { motion } from "framer-motion";
import { v4 as uuidV4 } from "uuid";
import { useGlobalStore } from "../../../store/useGlobalStore";
/* import Spline from "@splinetool/react-spline";
 */ import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const { setSplineLoaded } = useGlobalStore();

  return (
    <HeroCont className="relative flex items-center justify-center w-full bg-tertiary">
      <div className="relative flex w-full overflow-hidden nlg:flex-col">
        <div className="flex self-center w-full nlg:justify-center all-child:text-primary">
          <div className="flex flex-col gap-3 overflow-hidden nlg:child:text-center nlg:child:justify-center">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{
                x: "0%",
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              <p
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
                className="leading-tight text-h1"
              >
                Discover{" "}
                <span className="!text-secondary relative underline underline-offset-4">
                  Rare
                  <br /> 3 D Collections
                </span>{" "}
                <br />
                in the World
              </p>
              <p className="text-b1 nlg:w-full">
                The largest D NFT marketplace authentic and truly <br />
                unique digital creation. Create yout own NFT dream
                <br /> gallery
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{
                y: "0%",
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <div className="flex nmd:flex-col nmd:items-center nlg:justify-center gap-y-7 gap-x-[3rem]">
                {featuresItems.map((item) => (
                  <div key={item.id} className="flex flex-col justify-center ">
                    <p className="text-[2em]">${item.amount}</p>
                    <p className="text-b1">{item.title}</p>
                  </div>
                ))}
              </div>
              <div className="self-start nlg:self-center">
                <PrimaryButton buttonStyle="outlined">join now</PrimaryButton>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center w-full overflow-hidden nlg:py-10">
          <Suspense>
            <Spline
              onLoad={(e) => setSplineLoaded(true)}
              scene="https://prod.spline.design/iqQ0CixTM5zzXUmN/scene.splinecode"
            />
          </Suspense>
        </div>
      </div>
    </HeroCont>
  );
};

export default Hero;

interface FeaturesItem {
  id: string;
  title: string;
  amount: string;
}

export const featuresItems: FeaturesItem[] = [
  { id: uuidV4(), title: "Trading Volume", amount: "278M" },
  { id: uuidV4(), title: "Art Work", amount: "300K" },
  { id: uuidV4(), title: "Total Users", amount: "1.8M" },
];
