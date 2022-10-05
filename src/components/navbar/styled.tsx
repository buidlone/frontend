import Image from "next/image";
import styled, { css, keyframes } from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  background-color: rgba(19, 19, 29, 0.7);
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 991px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 3rem;
  max-width: 1400px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const NavLogo = styled(Image)`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 24px;
  opacity: 1;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -70px;
  gap: 3.75rem;

  @media screen and (max-width: 800px) {
    margin-right: 0px;
    gap: 2.5rem;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  font-size: 1rem;
  font-family: "Barlow", sans-serif;
  color: rgba(0, 196, 255, 1);

  &:hover {
    color: white;
  }

  &.active {
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
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

const rotate360 = keyframes`
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
  left: 48%; ;
`;
