import {
  AboveFooterText,
  BigExlamation,
  Block,
  Box,
  BoxText,
  CloseButton,
  Columns,
  DiscordButton,
  Flex,
  Footer,
  Logo,
  LogoWrapper,
  MadBuidlerWrapper,
  TextWrapper,
  TitleBoxText,
  TitleMessage,
} from "./styled";
import Image from "next/image";
import angryBuidler from "../../assets/angryBuidler.png";
import discord from "../../assets/discord.svg";
import instagram from "../../assets/Instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/Twitter.svg";
import { useContext} from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";

const StopStatus = ({ setIsShownStop }: any) => {
  const handleClose = () => {
    setIsShownStop(false);
  };
  const { totalPercentageAgainst } = useContext(LoadedValuesContext);

  return (
    <Block color="#00C4FF">
      <CloseButton onClick={handleClose}>&#215;</CloseButton>
      <Columns>
        <MadBuidlerWrapper>
          <Image src={angryBuidler} alt="Angry buidler" />
        </MadBuidlerWrapper>
        <TitleMessage>You have raised your voice!</TitleMessage>
        <Flex>
          <BigExlamation>!</BigExlamation>
          <Box>
            <TextWrapper>
              <TitleBoxText>
                {totalPercentageAgainst
                  ? Math.round(totalPercentageAgainst)
                  : 0}{" "}
                % has voted against
              </TitleBoxText>{" "}
              <br />
              <BoxText>
                Go ahead and share on{" "}
                <LogoWrapper
                  href="https://www.linkedin.com/company/buidl1/"
                  target="_blank"
                >
                  <Logo src={linkedin} alt="Linkedin logo" />
                </LogoWrapper>
                <LogoWrapper
                  href="https://twitter.com/buidlone"
                  target="_blank"
                >
                  <Logo src={twitter} alt="Twitter logo" />
                </LogoWrapper>
                <LogoWrapper target="_blank">
                  <Logo src={instagram} alt="Instagram logo" />
                </LogoWrapper>
              </BoxText>
            </TextWrapper>
          </Box>
        </Flex>
      </Columns>
      <AboveFooterText>What's next?</AboveFooterText>
      <Footer></Footer>
      <DiscordButton
        href="https://discord.com/channels/998519974714941480/998519974714941483"
        target="_blank"
      >
        <Logo src={discord} alt="Discord logo" />
        Stay tuned on Buidl1 discord server
      </DiscordButton>
    </Block>
  );
};

export default StopStatus;
