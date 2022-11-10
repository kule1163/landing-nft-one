import { Container, GridContainer } from "../../styledComponents";
import Palette from "../../../assets/palette.png";
import Square from "../../../assets/square.png";
import Time from "../../../assets/time.png";
import Image, { StaticImageData } from "next/image";
import Parallax from "../../framerMotion/Parallax";
import { v4 as uuidV4 } from "uuid";

const Resources = () => {
  return (
    <Container id="resources" className="flex flex-col w-full">
      <Parallax>
        <p className="mx-auto mb-7 text-center text-h2">
          Create and Sell Your NFTs
        </p>
      </Parallax>
      <GridContainer>
        {bannerItems.map((item) => (
          <Parallax key={item.id}>
            <div className="flex flex-col items-center px-3 py-4 rounded-3xl bg-primary">
              <Image src={item.image} alt="palette" />
              <p className="text-[2em] font-bold">{item.title}</p>
              <p className="mb-3 text-center text-b1">{item.content}</p>
            </div>
          </Parallax>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Resources;

interface BannerItem {
  id: string;
  image: StaticImageData;
  title: string;
  content: string;
}

export const bannerItems: BannerItem[] = [
  {
    id: uuidV4(),
    image: Palette,
    title: "Create Artwork",
    content:
      "Create your collection, Add social links, a description, profile &banner images, and set a secondary sales fee",
  },
  {
    id: uuidV4(),
    image: Square,
    title: "Create Artwork",
    content:
      "Create your collection, Add social links, a description, profile &banner images, and set a secondary sales fee",
  },
  {
    id: uuidV4(),
    image: Time,
    title: "Create Artwork",
    content:
      "Create your collection, Add social links, a description, profile &banner images, and set a secondary sales fee",
  },
];
