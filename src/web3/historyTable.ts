import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import InvestmentPoolABI from "./abi/InvestmentPool.json";

export const getHistoryTable = async (provider: any) => {
  try {
    const contract = new ethers.Contract(
      InvestmentPoolAddress,
      InvestmentPoolABI,
      provider
    );
    const filter = contract.filters.Invest();
    const filteredEvents = await contract.queryFilter(filter);
    let history = [{}];

    for (let i = 0; i < filteredEvents.length; i++) {
      const address = filteredEvents[i].args?.caller;
      const hash = filteredEvents[i].transactionHash;
      const amount = ethers.utils.formatEther(filteredEvents[i].args?.amount);

      history.splice(Number(i), 0, {
        address: address,
        amount: amount,
        hash: hash,
      });
    }
    history.pop();
    history = [...history].reverse();

    return history;
  } catch (error) {
    console.log(error);
    toast.error("Error occurred while retrieving data from blockchain");
  }
};
