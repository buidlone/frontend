import Image from "next/image";
import {
  FooterHeader,
  FooterSectionWrapper,
  MainText,
  ContactsLine,
  LogoWrapper,
  InputWrapper,
  CommunityText,
} from "./styled";
import InstagramLogo from "../../../public/instagram_logo.svg";
import TwitterLogo from "../../../public/twitter_logo.svg";
import LinkedinLogo from "../../../public/linkedin_logo.svg";
import DiscordLogo from "../../../public/discord_logo.svg";
import { BgImage } from "../../../styles/Container";

export default function FooterSection() {
  return (
    <FooterSectionWrapper>
      <FooterHeader>Start building with trust</FooterHeader>
      <MainText>
        As buidl1 is a new and growing project, we await any feedback on what
        might be improved, what you look for in our platform or have any
        questions regarding upcoming projects that will be collaborated with.
        Don't hesitate to follow us on our social networks and join up on the
        discord community for lots of varied discussions and plain chatting.
      </MainText>
      <ContactsLine>
        <InputWrapper>
          <CommunityText>Join our community!</CommunityText>
        </InputWrapper>
        <LogoWrapper>
          <a
            href="https://discord.com/channels/998519974714941480/998519974714941483"
            target="_blank"
          >
            <Image src={DiscordLogo} />
          </a>
          <a href="https://twitter.com/buidlone" target="_blank">
            <Image src={TwitterLogo} />
          </a>
          <a href="https://www.linkedin.com/company/buidl1" target="_blank">
            <Image src={LinkedinLogo} />
          </a>
          <a href="https://www.instagram.com/buidl1/" target="_blank">
            <Image src={InstagramLogo} />
          </a>
        </LogoWrapper>
      </ContactsLine>
      <BgImage isBottom />
    </FooterSectionWrapper>
  );
}

