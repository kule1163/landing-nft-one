import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import {
  Container,
  GridContainer,
  SecondaryButton,
} from "../../styledComponents";
import { ntsItems } from "../../../utils/data/nfts";
import useWindowSize from "../../../hooks/useWindowSize";
import Parallax from "../../framerMotion/Parallax";
import Image from "next/image";
import { SiEthereum } from "react-icons/si";

const Explore = () => {
  const [currentItem, setCurrentItem] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const size = useWindowSize();
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const x = useMotionValue(position.x / 2);
  const y = useMotionValue(position.y / 2);

  const rotateX = useTransform(y, [0, position.x], [30, -30]);
  const rotateY = useTransform(x, [0, position.y], [-30, 30]);

  function handleMove(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  useEffect(() => {
    const client = ref.current?.getBoundingClientRect();
    if (client) {
      setPosition({ x: client.width, y: client.height });
    }
  }, [size]);

  return (
    <Container id="explore" className="flex flex-col w-full">
      <Parallax>
        <div className="flex items-center justify-between w-full nmd:flex-col nmd:items-center gap-y-7 mb-7">
          <p className="text-center text-h2 w-fit ">Hot Drops</p>
          <SecondaryButton buttonStyle="outlined">view more</SecondaryButton>
        </div>
      </Parallax>
      <GridContainer>
        {ntsItems.map((item, i) => (
          <Parallax key={item.id}>
            <motion.div
              onMouseEnter={() => setCurrentItem(item.id)}
              onMouseLeave={() => setCurrentItem(null)}
              onMouseMove={(e) => handleMove(e)}
              className="flex flex-col w-full h-auto col-span-1 p-3 border-2 rounded-3xl border-tertiary"
            >
              <motion.div
                ref={ref}
                style={{
                  rotateX: currentItem === item.id ? rotateX : 0,
                  rotateY: currentItem === item.id ? rotateY : 0,
                  transition: "all 0.3s ease",
                }}
                className="flex"
              >
                <Image
                  alt={item.title}
                  src={item.image}
                  className="object-cover w-full mb-5 rounded-3xl"
                />
              </motion.div>
              <p className="text-[1.75em]">{item.title}</p>
              <p className="text-b1">@{item.creator}</p>
              <div className="flex items-center justify-between mt-3">
                <p className="tex t-b1">{item.amount} ETH</p>
                <div className="p-1 rounded-full text-b1 bg-secondary">
                  <SiEthereum size={20} />
                </div>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Explore;

/* <GridContainer
variants={gridAnimation("large", windowWidth, container)}
initial={gridAnimation("large", windowWidth, "hidden")}
whileInView={gridAnimation("large", windowWidth, "visible")}
>
{ntsItems.map((item, i) => (
  <motion.div
    variants={child}
    whileInView={gridAnimation("small", windowWidth, "visible")}
    initial={gridAnimation("small", windowWidth, "hidden")}
    className="flex flex-col w-full h-auto col-span-1 p-3 border-2 rounded-3xl border-tertiary"
  >
    <img
      src={item.image}
      className="object-cover w-full mb-5 h-80 rounded-3xl"
    />

    <p className="text-[1.75em]">{item.title}</p>
    <p className="text-b1">@{item.creator}</p>
    <div className="flex items-center justify-between mt-3">
      <p className="tex t-b1">{item.amount} ETH</p>
      <p className="text-b1">3 ETH</p>
    </div>
  </motion.div>
))}
</GridContainer> */

/*      <GridContainer ref={contRef}>
        {ntsItems.map((item, i) => (
          <motion.div
            ref={itemRef}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition:
                size.width && col && size.width > 700
                  ? { delay: (i % col) * 0.5 }
                  : undefined,
            }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            className="flex flex-col w-full h-auto col-span-1 p-3 border-2 rounded-3xl border-tertiary"
          >
            <img
              src={item.image}
              className="object-cover w-full mb-5 h-80 rounded-3xl"
            />

            <p className="text-[1.75em]">{item.title}</p>
            <p className="text-b1">@{item.creator}</p>
            <div className="flex items-center justify-between mt-3">
              <p className="tex t-b1">{item.amount} ETH</p>
              <p className="text-b1">3 ETH</p>
            </div>
          </motion.div>
        ))}
      </GridContainer>*/
