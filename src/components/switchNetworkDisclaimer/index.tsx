import { SwitchNetworkDisclaimerWrapper, SwitchButton } from "./styled";
import { useContext } from "react";
import Web3Context from "../../context/web3Context";
import Warning from "../../../public/icon_warning.svg";
import Image from "next/image";

const changeNetwork = async (provider: any) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x5" }],
    });
    console.log("You have switched to the right network");
  } catch (err) {
    console.log(err);
  }
};

const SwitchNetworkDisclaimer = () => {
  const { provider } = useContext(Web3Context);

  const handleNetworkSwitch = async () => {
    await changeNetwork(provider);
  };

  return (
    <>
      <SwitchNetworkDisclaimerWrapper>
        <Image src={Warning} />
        <p>Test our protocol while we're preparing for mainnet. </p>

        <SwitchButton onClick={() => handleNetworkSwitch()}>
          Switch to Goerli Testnet
        </SwitchButton>
      </SwitchNetworkDisclaimerWrapper>
    </>
  );
};

export default SwitchNetworkDisclaimer;
