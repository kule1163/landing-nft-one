import { v4 as uuidV4 } from "uuid";
import CreatorOne from "../../assets/creators/creator1.png";
import CreatorTwo from "../../assets/creators/creator2.png";
import CreatorThere from "../../assets/creators/creator3.png";
import CreatorFour from "../../assets/creators/creator4.png";
import CreatorFive from "../../assets/creators/creator5.png";
import CreatorSix from "../../assets/creators/creator6.png";
import CreatorSeven from "../../assets/creators/creator7.png";
import CreatorEight from "../../assets/creators/creator8.png";
import CreatorNine from "../../assets/creators/creator9.png";
import CreatorTen from "../../assets/creators/creator10.png";
import { StaticImageData } from "next/image";

export interface Creator {
  id: string;
  image: StaticImageData;
  name: string;
  amaount: number;
}

export const creators: Creator[] = [
  {
    id: uuidV4(),
    image: CreatorOne,
    name: "Pam Frami",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorTwo,
    name: "Axio Sun",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorThere,
    name: "Gloria Wolff MD",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorFour,
    name: "Albert Trantow",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorFive,
    name: "Alexis Mante",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorSix,
    name: "Kendra Terry",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorSeven,
    name: "Cary Goldner",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorEight,
    name: "Gregg Prosacco V",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorNine,
    name: "Angelina Koss",
    amaount: 2000,
  },
  {
    id: uuidV4(),
    image: CreatorTen,
    name: "Faith Mayert",
    amaount: 2000,
  },
];
