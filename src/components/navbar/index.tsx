import { useRouter } from "next/router";
import {
  Nav,
  NavbarContainer,
  NavLink,
  NavMenu,
  NavItem,
  ButtonWrapper,
  BurgerIcon,
  LogoWrapper,
} from "./styled";
import logo from "../../../public/brandmark_blue.svg";
import burgerIcon from "../../assets/burgerMenu.svg";
import Link from "next/link";
import React, { useContext, useState } from "react";

import Web3Context from "../../context/web3Context";
import { Web3Button } from "../web3Button";
import Image from "next/image";
import Mobile from "./mobile";

const Navbar = () => {
  const router = useRouter();
  const { address } = useContext(Web3Context);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <LogoWrapper>
          <Image src={logo} alt={"logo"} layout="fill" objectFit="cover" />
        </LogoWrapper>
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

          {address && (
            <NavItem>
              <Link href="/assets" passHref>
                <NavLink
                  className={router.pathname == "/assets" ? "active" : ""}
                >
                  Portfolio
                </NavLink>
              </Link>
            </NavItem>
          )}
        </NavMenu>
        {/* Address will not be displayed in the production version */}
        <BurgerIcon onClick={() => setShowMobile(!showMobile)}>
          <Image
            src={burgerIcon}
            alt={"burger menu"}
            height={"25px"}
            width={"25px"}
          />
        </BurgerIcon>

        <Mobile isVisible={showMobile} setShowMobile={setShowMobile} />

        <ButtonWrapper>
          <Web3Button />
        </ButtonWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

