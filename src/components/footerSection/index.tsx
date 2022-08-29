import Image from "next/image";
import {
  FooterHeader,
  FooterSectionWrapper,
  MainText,
  ContactsLine,
  InputLine1,
  InputLine2,
  LogoWrapper,
  InputWrapper,
} from "./styled";
import InstagramLogo from "../../../public/instagram_logo.svg";
import TwitterLogo from "../../../public/twitter_logo.svg";
import FacebookLogo from "../../../public/facebook_logo.svg";
import { BgImage } from "../../../styles/Container";

export default function FooterSection() {
  return (
    <FooterSectionWrapper>
      <FooterHeader>Start building with trust</FooterHeader>
      <MainText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </MainText>
      <ContactsLine>
        <LogoWrapper>
          <a href="">
            <Image src={TwitterLogo} />
          </a>
          <a href="">
            <Image src={FacebookLogo} />
          </a>
          <a href="">
            <Image src={InstagramLogo} />
          </a>
        </LogoWrapper>
        <InputWrapper>
          <InputLine1 />
          <InputLine2 />
        </InputWrapper>
      </ContactsLine>
      <BgImage isBottom />
    </FooterSectionWrapper>
  );
}
