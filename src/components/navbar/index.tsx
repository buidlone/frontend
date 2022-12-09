import { useRouter } from "next/router";
import {
  Nav,
  NavbarContainer,
  NavLink,
  NavMenu,
  NavItem,
  ButtonWrapper,
} from "./styled";
import logo from "../../../public/brandmark_blue.svg";
import Link from "next/link";
import React, { useContext } from "react";

import Web3Context from "../../context/web3Context";
import { Web3Button } from "../web3Button";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const { address } = useContext(Web3Context);

  return (
    <Nav>
      <NavbarContainer>
        <Image src={logo} alt={"logo"} height={"31.8px"} width={"31.8px"} />
        <NavMenu>
          <NavItem>
            <Link href="/projects" passHref>
              <NavLink
                className={router.pathname == "/projects" ? "active" : ""}
              >
                Home
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/buidl1" passHref>
              <NavLink className={router.pathname == "/buidl1" ? "active" : ""}>
                Buidl1
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/assets" passHref>
              <NavLink className={router.pathname == "/assets" ? "active" : ""}>
                Portfolio
              </NavLink>
            </Link>
          </NavItem>
        </NavMenu>
        {/* Address will not be displayed in the production version */}
        <ButtonWrapper>
          <Web3Button />
        </ButtonWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
