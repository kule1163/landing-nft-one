import { StaticImageData } from "next/image";
import { v4 as uuidV4 } from "uuid";
import NftOne from "../../assets/nfts/nft1.png";
import NftTwo from "../../assets/nfts/nft2.png";
import NftThere from "../../assets/nfts/nft3.png";
import NftFour from "../../assets/nfts/nft4.png";
import NftFive from "../../assets/nfts/nft5.png";
import NftSix from "../../assets/nfts/nft6.png";

interface NftItem {
  id: string;
  image: StaticImageData;
  title: string;
  creator: string;
  amount: number;
}

export const ntsItems: NftItem[] = [
  {
    id: uuidV4(),
    image: NftOne,
    title: "Knight Sword",
    creator: "santosox",
    amount: 3,
  },
  {
    id: uuidV4(),
    image: NftTwo,
    title: "Daft Punk",
    creator: "punix",
    amount: 3,
  },
  {
    id: uuidV4(),
    image: NftThere,
    title: "Skater Girl",
    creator: "inoino",
    amount: 3,
  },
  {
    id: uuidV4(),
    image: NftFour,
    title: "Grogu",
    creator: "alexio",
    amount: 3,
  },
  {
    id: uuidV4(),
    image: NftFive,
    title: "Foodies",
    creator: "animola",
    amount: 3,
  },
  {
    id: uuidV4(),
    image: NftSix,
    title: "Friends Kawaii",
    creator: "kunai",
    amount: 3,
  },
];
