import { useRouter } from "next/router";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLink,
  NavMenu,
  NavItem,
  ConnectWalletBtn,
  ButtonWrapper,
} from "./styled";
import logo from "../../../public/buidl1.svg";
import Link from "next/link";
import React, { useContext } from "react";

import Web3Context from "../../context/web3Context";
import { Web3Button } from "../web3Button";

const Navbar = () => {
  const router = useRouter();
  const { address } = useContext(Web3Context);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo src={logo} />
        <NavMenu>
          <NavItem>
            <Link href="/projects" passHref>
              <NavLink
                className={router.pathname == "/projects" ? "active" : ""}
              >
                Projects
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
                My assets
              </NavLink>
            </Link>
          </NavItem>
        </NavMenu>
        {/* Address will not be displayed in the production version */}
        <ButtonWrapper>
          <Web3Button />
          <div
            style={{
              color: "white",
              fontSize: "9px",
              position: "absolute",
              bottom: "0",
            }}
          >
            {address ? address : ""}
          </div>
        </ButtonWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
