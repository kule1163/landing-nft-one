import { useRef, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { SecondaryButton } from "../styledComponents";

const MenuItems = ({ menuToggle }: { menuToggle: boolean }) => {
  const [currentItem, setCurrentItem] = useState<string>();

  return (
    <div
      className={`flex items-center ${
        menuToggle ? `nlg:max-h-[100vh]` : "nlg:max-h-0"
      }  nlg:bg-primary nlg:flex-col nlg:border-t-2 nlg:left-0 nlg:all-child:!text-tertiary nlg:all-child:!border-tertiary nlg:w-full nlg:!transition-all nlg:!duration-1000 z-50 nlg:absolute nlg:top-[100%] nlg:overflow-hidden`}
    >
      <div className="flex nlg:text-center nlg:flex-col gap-x-[4vw] py-3 nlg:gap-5">
        {menuItems.map((item) => (
          <a
            href={`#${item.item}`}
            onClick={() => setCurrentItem(item.id)}
            key={item.id}
            className={`text-[1.5em] self-center cursor-pointer relative !text-tertiary tracking-widest  font-[400] after:content-[''] after:bottom-0 after:hover:translate-x-0 after:left-0 after:absolute after:h-1 after:w-full overflow-hidden after:-translate-x-[105%] after:transition-all after:duration-500 after:bg-tertiary ${
              item.id === currentItem && "after:!translate-x-0"
            }`}
          >
            {item.item}
          </a>
        ))}
        <SecondaryButton buttonStyle="outlined">connect wallet</SecondaryButton>
      </div>
    </div>
  );
};

export default MenuItems;

interface MenuItem {
  id: string;
  item: string;
}

export const menuItems: MenuItem[] = [
  { id: uuidV4(), item: "explore" },
  { id: uuidV4(), item: "resources" },
  { id: uuidV4(), item: "creators" },
];
