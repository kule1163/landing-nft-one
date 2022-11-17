import { HeroCont, PrimaryButton } from "../../styledComponents";
import { motion } from "framer-motion";
import { v4 as uuidV4 } from "uuid";
import { useGlobalStore } from "../../../store/useGlobalStore";
/* import Spline from "@splinetool/react-spline";
 */ import { lazy, Suspense, memo, useRef, useState } from "react";
import useSpline from "@splinetool/r3f-spline";
import { Canvas, useFrame } from "@react-three/fiber";

/* function Box(props:any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
} */

const Spline = lazy(() => import("@splinetool/react-spline"));

function Box(props: any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null!);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

const Hero = () => {
  const { setSplineLoaded } = useGlobalStore();

  const mesh = useRef<THREE.Mesh>(null);

  /*  const { nodes, materials } = useSpline(
    "https://prod.spline.design/iqQ0CixTM5zzXUmN/scene.splinecode"
  ); */

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
          {/*  <Suspense>
            <Spline
              onLoad={(e) => setSplineLoaded(true)}
              scene="https://prod.spline.design/iqQ0CixTM5zzXUmN/scene.splinecode"
            />
          </Suspense> */}
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
          </Canvas>
        </div>
      </div>
    </HeroCont>
  );
};

export default memo(Hero);

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
