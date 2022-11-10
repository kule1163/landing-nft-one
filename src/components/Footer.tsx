import { Container, SecondaryButton } from "./styledComponents";
import { v4 as uuidV4 } from "uuid";
import { BsArrowRight } from "react-icons/bs";
import Parallax from "./framerMotion/Parallax";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Parallax>
      <Container className="flex flg:flex-col justify-between border-t-4 my-auto py-14 border-t-tertiary">
        <div className="flex flex-col flg:mb-7">
          <Logo />
          <p>
            The largest 3D NFT marketplace. Authentic and truly <br /> unique
            digital creation. Signed and issued by the <br /> creator. made
            possible by blockchain technology
          </p>
        </div>
        <div className="flex fmd:gap-y-5 flg:w-full w-7/12 fmd:flex-col justify-between">
          {boxes.map((box) => (
            <div key={box.id} className="flex gap-2 flex-col">
              <p
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
                className="font-bold capitalize text-[1.5em] mb-3"
              >
                {box.header}
              </p>
              {box.links.map((link) => (
                <p key={link.id} className="font-b1 capitalize cursor-pointer">
                  {link.link}
                </p>
              ))}
            </div>
          ))}
          <div className="flex flex-col">
            <p
              style={{
                fontFamily: "Cormorant Garamond",
              }}
              className="font-bold text-[1.5em] mb-5"
            >
              Subscribe
            </p>
            <div className="self-start">
              <SecondaryButton buttonStyle="outlined">
                <span>Get NFT updates</span>
                <span>
                  <BsArrowRight />
                </span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </Parallax>
  );
};

export default Footer;

interface BoxItem {
  header: string;
  id: string;
  links: {
    link: string;
    id: string;
  }[];
}

export const boxes: BoxItem[] = [
  {
    id: uuidV4(),
    header: "quick links",
    links: [
      { link: "about", id: uuidV4() },
      { link: "blog", id: uuidV4() },
      { link: "press", id: uuidV4() },
    ],
  },
  {
    id: uuidV4(),
    header: "resources",
    links: [
      { link: "Help Center", id: uuidV4() },
      { link: "Community", id: uuidV4() },
      { link: "Partners", id: uuidV4() },
    ],
  },
];
