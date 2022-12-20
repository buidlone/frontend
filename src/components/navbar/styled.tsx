import styled, { css, keyframes } from "styled-components";
import breakpoints from "../../../styles/constants";

export const Nav = styled.nav`
  height: 70px;
  background-color: rgba(19, 19, 29, 0.7);
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: relative;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 991px) {
    transition: 0.8s all ease;
  }

  @media screen and ${breakpoints.Device.mobile} {
    position: absolute;
    width: 100%;
    background: 100%;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 31.8px;
  width: 31.8px;
  top: 20px;

  @media screen and ${breakpoints.Device.mobile} {
    height: 20px;
    width: 20px;
    top: 22px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 3.1rem;
  max-width: 1400px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const NavbarContainerMobile = styled.div`
  height: 100vh;
  display: block;
  z-index: 5;
  top: 0px;
  width: 100%;
  left: 0px;
  position: fixed;
  background-color: rgba(19, 19, 29, 1);
`;

export const NavMenuMobile = styled.ul`
  display: none;
  display: none;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  padding: 0 0.6rem;

  @media screen and ${breakpoints.Device.mobile} {
    display: flex;
    margin-bottom: 100px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -159px;
  gap: 3.75rem;

  @media screen and (max-width: 800px) {
    margin-right: 0px;
    gap: 2.5rem;
  }

  @media screen and ${breakpoints.Device.mobile} {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  list-style-type: none;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  font-size: 1.125rem;
  font-family: "Barlow", sans-serif;
  color: #f0f0f0;
  position: relative;

  &:hover {
    color: #00c4ff;
  }

  &.active {
    color: #00c4ff;
  }

  &.active::after {
    content: "";
    position: absolute;
    width: 95%;
    bottom: 1.75rem;
    left: 1px;
    border-bottom: 1px solid #00c4ff;

    @media screen and ${breakpoints.Device.mobile} {
      border-bottom: none;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and ${breakpoints.Device.mobile} {
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and ${breakpoints.Device.mobile} {
    display: none;
  }
`;

export const ConnectWalletBtn = styled.button`
  width: 12.5rem;
  height: 40px;
  border-radius: 20px;
  background: transparent;
  color: #00c4ff;
  border: 1px solid #00c4ff;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  transition: all 250ms ease-in;
  transform: translateX(0);

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    border: 1px solid white;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ProjectHeader = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background: transparent;
  color: #00c4ff;
  border: 1px solid #00c4ff;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 250ms ease-in;
  transform: translateX(0);

  &:hover {
    color: white;
    border: 1px solid white;
  }
`;

export const BurgerIcon = styled.button`
  display: none;

  @media screen and ${breakpoints.Device.mobile} {
    display: block;
    font-weight: bold;
    color: #009dff;
    font-size: 28px;
    border: none;
    background: transparent;
    margin-left: auto;
    padding: 0px;
  }
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #00c4ff;
  border-right: 2px solid #00c4ff;
  border-bottom: 2px solid #00c4ff;
  border-left: 4px solid black;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 48%;
`;

export const SpinnerText = styled.p`
  color: white;
  position: absolute;
  // left: 0;
  // right: 0;
  // margin-left: auto;
  // margin-right: auto;
  left: 46%;
  width: 180px;
  top: 55%;
  text-align: center;

  @media screen and ${breakpoints.Device.mobile} {
    width: 90%;
    top: 57%;
  }
`;

