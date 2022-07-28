import styled, { css } from "styled-components";
import React from "react";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: 70px;
  width: 100%;
  gap: 30px;
  align-items: center;
  background: #13131d;
  margin-bottom: 50px;
  color: #00c4ff;
  font-size: 16px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  a {
    cursor: pointer;
    margin-left: 30px;
    margin-right: 30px;
    transition: 250ms ease-in;
    transform: translateX(0);

    &:hover {
      color: white;
    }

    &.active {
      color: white;
    }
  }
`;

export const ConnetWalletBtn = styled.button`
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
