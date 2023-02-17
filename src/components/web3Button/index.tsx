import React, { useContext, useEffect } from "react";
import Web3Context from "../../context/web3Context";
import { ConnectWalletBtn } from "./styled";

interface ConnectProps {
  connect: (() => Promise<void | boolean>) | null;
}
const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <ConnectWalletBtn onClick={connect}>Connect wallet</ConnectWalletBtn>
  ) : (
    <ConnectWalletBtn>Loading...</ConnectWalletBtn>
  );
};

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null;
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
  return disconnect ? (
    <>
      <ConnectWalletBtn onClick={disconnect}>
        Disconnect wallet
      </ConnectWalletBtn>
    </>
  ) : (
    <ConnectWalletBtn>Loading...</ConnectWalletBtn>
  );
};

export function Web3Button() {
  const a = useContext(Web3Context);

  return a.web3Provider && a.address ? (
    <DisconnectButton disconnect={a.logout} />
  ) : (
    <ConnectButton connect={a.login} />
  );
}
