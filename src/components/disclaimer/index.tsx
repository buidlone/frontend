import { HideForDesktop, HideForMobile } from "../../../styles/Container";
import { DisclaimerWrapper, SocialsWrapper } from "./styled";
import InstagramLogo from "../../../public/instagram_logo_white.svg";
import TwitterLogo from "../../../public/twitter_logo_white.svg";
import LinkedinLogo from "../../../public/linkedin_logo_white.svg";
import DiscordLogo from "../../../public/discord_logo_white.svg";
import Image from "next/image";

const Disclaimer = ({ hideMobile }: any) => {
  if (hideMobile) {
    return (
      <HideForMobile style={{ width: "100%" }}>
        <DisclaimerWrapper>
          <p>
            Test our protocol while we're preparing for mainnet. Make sure to{" "}
            <a
              target="_blank"
              href="https://app.superfluid.finance/wrap?upgrade"
            >
              wrap
            </a>{" "}
            your ETH tokens. Keep updated:
          </p>
          <SocialsWrapper>
            <a
              href="https://discord.com/channels/998519974714941480/998519974714941483"
              target="_blank"
            >
              <Image src={DiscordLogo} height="20px" />
            </a>

            <a href="https://www.linkedin.com/company/buidl1" target="_blank">
              <Image src={LinkedinLogo} height="20px" />
            </a>
            <a href="https://twitter.com/buidlone" target="_blank">
              <Image src={TwitterLogo} height="20px" />
            </a>
            <a href="https://www.instagram.com/buidl1/" target="_blank">
              <Image src={InstagramLogo} height="20px" />
            </a>
          </SocialsWrapper>
        </DisclaimerWrapper>
      </HideForMobile>
    );
  } else {
    return (
      <HideForDesktop>
        <DisclaimerWrapper>
          Test our protocol while we're preparing for mainnet. Keep updated:
          <SocialsWrapper>
            <a
              href="https://discord.com/channels/998519974714941480/998519974714941483"
              target="_blank"
            >
              <Image src={DiscordLogo} height="20px" />
            </a>

            <a href="https://www.linkedin.com/company/buidl1" target="_blank">
              <Image src={LinkedinLogo} height="20px" />
            </a>
            <a href="https://twitter.com/buidlone" target="_blank">
              <Image src={TwitterLogo} height="20px" />
            </a>
            <a href="https://www.instagram.com/buidl1/" target="_blank">
              <Image src={InstagramLogo} height="20px" />
            </a>
          </SocialsWrapper>
        </DisclaimerWrapper>
      </HideForDesktop>
    );
  }
};

export default Disclaimer;

