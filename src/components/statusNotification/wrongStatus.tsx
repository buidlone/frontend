import {
  AboveFooterText,
  Block,
  CloseButton,
  Columns,
  DiscordButton,
  Flex,
  Footer,
  Logo,
  MadBuidlerWrapper,
  TitleMessage,
  TryAgain,
} from "./styled";
import Image from "next/image";
import wrongBuidler from "../../assets/smthWrong.png";
import discord from "../../assets/discord.svg";
import { useRouter } from "next/router";

const WrongStatus = ({ setIsShownWrong }: any) => {
  const router = useRouter();
  const handleClose = () => {
    setIsShownWrong(false);
  };

  return (
    <Block color="#A8B3B9">
      <CloseButton onClick={handleClose}>&#215;</CloseButton>
      <Columns amount="2">
        <MadBuidlerWrapper>
          <Image src={wrongBuidler} alt="Angry buidler" />
        </MadBuidlerWrapper>
        <TitleMessage>No Congrats buidler! Something went wrong.</TitleMessage>
      </Columns>
      <AboveFooterText>What's next?</AboveFooterText>
      <Footer></Footer>
      <Flex style={{ justifyContent: "start" }}>
        <TryAgain onClick={() => router.reload()}>Try Again</TryAgain>
        <DiscordButton
          href="https://discord.com/channels/998519974714941480/998519974714941483"
          target="_blank"
          style={{ width: "210px" }}
        >
          <Logo src={discord} alt="Discord logo" />
          Contact Support
        </DiscordButton>

        <TryAgain dashed onClick={() => router.reload()}>
          Try Alt+f4
        </TryAgain>
      </Flex>
    </Block>
  );
};

export default WrongStatus;
