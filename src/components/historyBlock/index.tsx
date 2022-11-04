import { useContext, useEffect } from "react";
import Web3Context from "../../context/web3Context";
import { getHistoryTable } from "../../web3/historyTable";
import { HistoryTable } from "./styled";

const HistoryBlock = () => {
  const { web3Provider, connect, address } = useContext(Web3Context);
  useEffect(() => {
    if (web3Provider) {
      getHistoryTable(web3Provider, address).then((data: any) => {
        console.log(data);
      });
    } else {
    }
  });

  return <HistoryTable style={{ color: "white" }}>History Table</HistoryTable>;
};

export default HistoryBlock;
