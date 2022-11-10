import Marquee from "./Marquee";
import Parallax from "../../framerMotion/Parallax";
import { creators } from "../../../utils/data/creators";

const Creators = () => {
  return (
    <div id="creators">
      <Parallax>
        <div className="flex flex-col gap-5 overflow-hidden">
          <p className="text-center text-h2">Top Creators</p>
          <div>
            <Marquee creators={creators.slice(0, 5)} rotate={false} />
            <Marquee creators={creators.slice(5)} rotate={true} />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Creators;
