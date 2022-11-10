import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, RefObject } from "react";

const Parallax = ({ children }: { children: JSX.Element }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["75px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div className="flex w-full" style={{ y, opacity }} ref={ref}>
      {children}
    </motion.div>
  );
};

export default Parallax;
