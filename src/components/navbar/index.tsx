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
  Network,
} from "./styled";
import logo from "../../../public/brandmark_blue.svg";
import burgerIcon from "../../assets/burgerMenu.svg";
import Link from "next/link";
import React, { useContext, useState } from "react";

import { Web3Button } from "../web3Button";
import Image from "next/image";
import Mobile from "./mobile";
import Web3Context from "../../context/web3Context";

const Navbar = () => {
  const router = useRouter();
  const { web3Provider, address, chainId } = useContext(Web3Context);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <LogoWrapper>
          <a href="http://localhost:3000/projects">
            <Image src={logo} alt={"logo"} layout="fill" objectFit="cover" />
          </a>
        </LogoWrapper>
        <NavMenu connected={web3Provider ? true : false}>
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
          <Network connected={web3Provider && chainId === 5}>
            Goerli testnet
          </Network>
          <Web3Button />
        </ButtonWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
