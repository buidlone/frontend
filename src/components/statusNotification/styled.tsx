import styled, { css } from "styled-components";
import angryBuidler from "../../assets/angryBuidler.png";
import Image from "next/image";

interface BlockColors {
  color: string;
}

interface ColumnAmount {
  amount?: string;
}

interface Dashed {
  dashed?: boolean;
}

export const Block = styled.div<BlockColors>`
  width: 100%;
  border-radius: 30px;
  height: 350px;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 0px 0px 0px 7%;
  background: ${(props) => props.color};
  color: black;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: black;
  font-size: 34px;
  margin-left: auto;
  display: block;
  margin-right: 10px;
  font-weight: bold;
  height: 0px;
  cursor: pointer;
  color: black;
`;

export const Columns = styled.div<ColumnAmount>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.amount === "2" ? "100px auto" : "100px 2fr 2fr"};
  gap: 40px;
  padding: 30px 7% 20px 0px;
  height: 65%;
`;

export const TitleMessage = styled.text`
  font-size: 34px;
  font-weight: bold;
  align-self: center;
  color: black;
`;
export const MadBuidler = styled(Image)`
  width: 150px;
  height: 150px;
`;

export const MadBuidlerWrapper = styled.div`
  height: 10px;
`;

export const BigExlamation = styled.text`
  font-size: 90px;
  font-weight: bold;
  color: black;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  border: 1px solid black;
  padding: 15px 10px;
  text-align: center;
  height: 90px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const DiscordButton = styled.a`
  width: 330px;
  border-radius: 20px;
  border: 1px solid black;
  height: 30px;
  padding: 3px 20px;
  font-weight: semi-bold;
  gap: 20px;
  display: flex;
  color: black;
`;

export const VotingButton = styled(DiscordButton)`
  width: 205px;
  display: block;
`;

export const TryAgain = styled.button<Dashed>`
  width: 160px;
  align-text: center;
  border-radius: 20px;
  border: ${(props) => (props.dashed ? "1px dashed black" : "1px solid black")};
  height: 30px;
  padding: 3px 20px;
  font-weight: semi-bold;
  background: transparent;
  cursor: pointer;
  color: black;
`;

export const TitleBoxText = styled.text`
  font-weight: bold;
  font-size: 24px;
  color: black;
`;

export const BoxText = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  color: black;
`;
export const Logo = styled(Image)`
  height: 18px;
  width: 18px;
`;

export const LogoWrapper = styled.a``;

export const Flex = styled.div`
  display: flex;
  align-items: end;
  gap: 15px;
  justify-content: end;
`;

export const AboveFooterText = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 1px;
  margin-top: 0px;
  color: black;
`;

export const Footer = styled.div`
  border-top: 1px solid black;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-bottom: 20px;
`;
