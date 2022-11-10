import styled from "styled-components";
import colors from "../styles/veriables/colors";
import breakpoints from "../styles/veriables/breakpoints";
import { motion } from "framer-motion";

const navHeight = "80px";

const Button = styled.button`
  border-radius: 68px;
  padding: 8px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  font-family: "Cormorant Garamond" !important;
  font-weight: 500;
  letter-spacing: 0.03em;
  gap: 10px;
  text-transform: capitalize;
  font-size: 1.5em;
  transition: all ease 0.5s;
  &:hover {
    transform: scale(0.9);
  }
`;

interface PrimaryButtonProps {
  buttonStyle: "outlined" | "contained";
}

export const Container = styled.div`
  padding-inline: 5rem;
  width: 100%;

  @media (max-width: 700px) {
    padding-inline: 2rem;
  }
  @media (max-width: 500px) {
    padding-inline: 1rem;
  }
`;

export const NavbarCont = styled(Container)`
  height: ${navHeight};
`;
export const HeroCont = styled(Container)`
  margin-top: ${navHeight};
  min-height: calc(100vh - 80px);
`;

export const Logo = styled.a`
  font-size: 40px;
  font-weight: 800;
  position: relative;
  cursor: pointer;
  width: fit-content;
  &:after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    top: 52%;
    background-color: ${colors.tertiary};
  }
`;

export const PrimaryButton = styled(Button)<PrimaryButtonProps>`
  background-color: ${(props) =>
    props.buttonStyle === "outlined" ? "transparent" : colors.primary};
  color: ${(props) =>
    props.buttonStyle === "outlined" ? colors.primary : colors.tertiary};
  border-color: ${colors.primary};
`;

export const SecondaryButton = styled(Button)<PrimaryButtonProps>`
  background-color: ${(props) =>
    props.buttonStyle === "outlined" ? "transparent" : colors.tertiary};
  color: ${(props) =>
    props.buttonStyle === "outlined" ? colors.tertiary : colors.primary};
  border-color: ${colors.tertiary};
`;

export const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  @media (max-width: ${breakpoints.glg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${breakpoints.gmd}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
