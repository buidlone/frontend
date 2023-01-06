import { HideForDesktop, HideForMobile } from "../../../styles/Container";
import {
  BtnImage,
  DisclaimerWrapper,
  ExpandDisclaimer,
  MiddleItems,
  SocialsWrapper,
} from "./styled";
import InstagramLogo from "../../../public/instagram_logo_white.svg";
import TwitterLogo from "../../../public/twitter_logo_white.svg";
import LinkedinLogo from "../../../public/linkedin_logo_white.svg";
import DiscordLogo from "../../../public/discord_logo_white.svg";
import Image from "next/image";
import { useContext, useState } from "react";
import Web3Context from "../../context/web3Context";
import SwitchNetworkDisclaimer from "../switchNetworkDisclaimer";
import Warning from "../../../public/icon_warning.svg";
import DisclaimerContext from "../../context/disclaimerContext";

const Disclaimer = ({ hideMobile }: any) => {
  const { web3Provider } = useContext(Web3Context);
  const { showDisclaimer, setShowDisclaimer } = useContext(DisclaimerContext);

  if (hideMobile) {
    return (
      <HideForMobile style={{ width: "100%" }}>
        {web3Provider && web3Provider?.network.chainId !== 5 ? (
          <SwitchNetworkDisclaimer />
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <ExpandDisclaimer expanded={showDisclaimer}>
                <BtnImage
                  expanded={showDisclaimer}
                  onClick={() => setShowDisclaimer(!showDisclaimer)}
                />
              </ExpandDisclaimer>
            </div>
            <DisclaimerWrapper expanded={showDisclaimer}>
              <Image src={Warning} />
              <MiddleItems>
                <p>
                  Test our protocol while we're preparing for mainnet. Make sure
                  to{" "}
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
                    <Image src={DiscordLogo} height="18px" />
                  </a>

                  {/* <a
                  href="https://www.linkedin.com/company/buidl1"
                  target="_blank"
                >
                  <Image src={LinkedinLogo} height="18px" />
                </a> */}
                  <a href="https://twitter.com/buidlone" target="_blank">
                    <Image src={TwitterLogo} height="21px" />
                  </a>
                  <a href="https://www.instagram.com/buidl1/" target="_blank">
                    <Image src={InstagramLogo} height="21px" />
                  </a>
                </SocialsWrapper>{" "}
              </MiddleItems>
            </DisclaimerWrapper>{" "}
          </>
        )}
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
