import { useRouter } from "next/router";
import {
  NavLink,
  NavItem,
  BurgerIcon,
  NavbarContainerMobile,
  NavMenuMobile,
} from "./styled";
import Link from "next/link";
import React from "react";

const Mobile = ({ isVisible, setShowMobile }: any) => {
  const router = useRouter();

  return (
    <>
      <NavbarContainerMobile
        style={{
          opacity: !isVisible ? "0" : "1",
          transition: "all 0.8s",
          visibility: !isVisible ? "hidden" : "visible",
        }}
      >
        <NavMenuMobile>
          <BurgerIcon
            style={{ marginRight: "20px" }}
            onClick={() => setShowMobile(false)}
          >
            &#10005;
          </BurgerIcon>
        </NavMenuMobile>
        <NavItem>
          <Link href="/projects" passHref>
            <NavLink
              onClick={() => setShowMobile(false)}
              className={router.pathname == "/projects" ? "active" : ""}
            >
              Home
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/buidl1" passHref>
            <NavLink
              onClick={() => setShowMobile(false)}
              className={router.pathname == "/buidl1" ? "active" : ""}
            >
              Buidl1
            </NavLink>
          </Link>
        </NavItem>
      </NavbarContainerMobile>
    </>
  );
};

export default Mobile;

