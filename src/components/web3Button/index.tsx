import React, { useContext } from "react";
import Web3Context from "../../context/web3Context";
import { ConnectWalletBtn } from "./styled";

interface ConnectProps {
  connect: (() => Promise<void>) | null;
}
const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <ConnectWalletBtn onClick={connect}>Connect</ConnectWalletBtn>
  ) : (
    <ConnectWalletBtn>Loading...</ConnectWalletBtn>
  );
};

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null;
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
  return disconnect ? (
    <ConnectWalletBtn onClick={disconnect}>Disconnect</ConnectWalletBtn>
  ) : (
    <ConnectWalletBtn>Loading...</ConnectWalletBtn>
  );
};

export function Web3Button() {
  const { web3Provider, connect, disconnect } = useContext(Web3Context);

  return web3Provider ? (
    <DisconnectButton disconnect={disconnect} />
  ) : (
    <ConnectButton connect={connect} />
  );
}
