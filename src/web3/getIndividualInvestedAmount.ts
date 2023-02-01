import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import InvestmentPoolABI from "./abi/InvestmentPool.json";

export const getIndividualInvestedAmount = async (
  provider: any,
  address?: null | string
) => {
  let totalAmountInvestedBN = BigNumber.from(0);
  let investorHistory = [{}];

  try {
    const contract = new ethers.Contract(
      InvestmentPoolAddress,
      InvestmentPoolABI,
      provider
    );
    const filter = contract.filters.Invest(address);
    const filteredEvents = await contract.queryFilter(filter);

    for (let i in filteredEvents) {
      const investedAmount = filteredEvents[i].args?.amount;
      totalAmountInvestedBN = totalAmountInvestedBN.add(investedAmount);

      const address = filteredEvents[i].args?.caller;
      const hash = filteredEvents[i].transactionHash;
      const amount = ethers.utils.formatEther(filteredEvents[i].args?.amount);

      investorHistory.splice(Number(i), 0, {
        address: address,
        amount: amount,
        hash: hash,
      });
    }

    const totalAmountInvested = ethers.utils.formatEther(totalAmountInvestedBN);

    investorHistory.pop();
    investorHistory = [...investorHistory].reverse();
    return {
      totalAmountInvested,
      investorHistory,
    };
  } catch (error) {
    console.log(error);
    toast.error("Error occurred while retrieving data from blockchain");

    return { totalAmountInvestedBN, investorHistory };
  }
};
