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
  TryAgain,
  VotingButton,
} from "./styled";
import Image from "next/image";
import investorBuidler from "../../assets/investorBuidler.png";
import discord from "../../assets/discord.svg";
import instagram from "../../assets/Instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/Twitter.svg";
import { useInvestors } from "../../hooks/useInvestmentHistory";

const InvestStatus = ({ setIsShownInvest }: any) => {
  const { wallets } = useInvestors();
  const handleClose = () => {
    setIsShownInvest(false);
  };

  return (
    <Block color="#3AEDC4">
      <CloseButton onClick={handleClose}>&#215;</CloseButton>
      <Columns amount="2">
        <MadBuidlerWrapper>
          <Image src={investorBuidler} alt="Angry buidler" />
        </MadBuidlerWrapper>
        <div style={{ marginTop: "30px" }}>
          <TitleMessage>
            Congrats buidler! Now you are a part of our ecosystem! <br /> Keep
            buidl on!
          </TitleMessage>
          <Flex style={{ height: "80px" }}>
            <BigExlamation>!</BigExlamation>
            <Box>
              <TextWrapper>
                <TitleBoxText>You are {wallets} BUIDLER</TitleBoxText> <br />
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
        </div>
      </Columns>
      <AboveFooterText>What's next?</AboveFooterText>
      <Footer></Footer>
      <Flex style={{ justifyContent: "start" }}>
        <DiscordButton
          href="https://discord.com/channels/998519974714941480/998519974714941483"
          target="_blank"
        >
          <Logo src={discord} alt="Discord logo" />
          Stay tuned on Buidl1 discord server
        </DiscordButton>
        <VotingButton
          href="https://docs.buidl.one/whitepaper/solutions/voting-pool"
          target="_blank"
        >
          Learn how voting works
        </VotingButton>
      </Flex>
    </Block>
  );
};

export default InvestStatus;
