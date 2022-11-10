import { useState } from "react";
import { NavbarCont } from "../styledComponents";
import MenuItems from "./MenuItems";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <NavbarCont className=" flex items-center justify-between w-full border-tertiary bg-primary fixed z-50">
      <Logo />
      <MenuItems menuToggle={menuToggle} />
      <div
        onClick={() => setMenuToggle((prev) => !prev)}
        className="hidden nlg:block"
      >
        {menuToggle ? (
          <AiOutlineClose size={25} cursor="pointer" />
        ) : (
          <AiOutlineMenu size={25} cursor="pointer" />
        )}
      </div>
    </NavbarCont>
  );
};

export default Navbar;
