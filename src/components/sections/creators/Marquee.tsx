import Image, { StaticImageData } from "next/image";
import { SiEthereum } from "react-icons/si";

interface Creator {
  id: string;
  image: StaticImageData;
  name: string;
  amaount: number;
}

interface Props {
  creators: Creator[];
  rotate: boolean;
}

const Marquee = ({ creators, rotate }: Props) => {
  const ImageBox = (creators: Creator[]) => {
    return (
      <>
        {creators.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 items-center text-tertiary relative h-full nlg:w-[320px] w-[30vw]"
          >
            <Image
              alt="creator"
              className="w-[80px] h-[80px] object-cover rounded-full"
              src={item.image}
            />
            <div>
              <p className="capitalize text-[1.5em] font-bold">{item.name}</p>
              <div className="flex gap-2">
                <div className="p-1 rounded-full text-b1 w-fit bg-secondary">
                  <SiEthereum size={15} />
                </div>
                <p className="font-bold">{item.amaount}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div
      className={`group relative flex nlg:w-[1600px] w-[150vw]  ${
        rotate && "rotate-180"
      } h-40 !overflow-hidden text-white `}
    >
      <div
        className={`group-hover:pause flex animate-marquee ${
          rotate && "child:rotate-180"
        } h-full items-center`}
      >
        {ImageBox(creators)}
      </div>
      <div
        className={`absolute top-0 left-0 flex ${
          rotate && "child:rotate-180"
        } group-hover:pause h-full animate-marquee2 items-center`}
      >
        {ImageBox(creators)}
      </div>
    </div>
  );
};

export default Marquee;
