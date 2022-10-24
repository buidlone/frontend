import { ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import ERC20TokenABI from "../web3/abi/ERC20Token.json";
import InvestmentPoolABI from "./abi/InvestmentPool.json";


export const invest = async (
  tokenAddress: string,
  provider: any,
  amount: number,
  address: string
) => {
  if (provider) {
    try {
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(
        tokenAddress,
        ERC20TokenABI,
        signer
      );
      
      
      const investmentPoolContract = new ethers.Contract(
        InvestmentPoolAddress,
        InvestmentPoolABI,
        signer
      );
      const allowance = await tokenContract.allowance(
        address,
        InvestmentPoolAddress
      );
      

      if (amount > Number(ethers.utils.formatEther(allowance.toString()))) {
        const approvalTransaction = await tokenContract.approve(
          InvestmentPoolAddress,
          ethers.utils.parseEther(amount.toString())
        );
        const approvalReceipt = await approvalTransaction.wait();
        const investmentTransaction = await investmentPoolContract.invest(
          ethers.utils.parseEther(amount.toString()),
          true
        );
        const investmentReceipt = await investmentTransaction.wait();
        const totalInvestedAmount = await investmentPoolContract.totalInvestedAmount()
        toast.success("Transaction was successful");

      return (Number(ethers.utils.formatEther(totalInvestedAmount)))

      } else {
        const investmentTransaction = await investmentPoolContract.invest(
          ethers.utils.parseEther(amount.toString()),
          true
        );
        const investmentReceipt = await investmentTransaction.wait();
        const totalInvestedAmount = await investmentPoolContract.totalInvestedAmount()
        toast.success("Transaction was successful");
      return (Number(ethers.utils.formatEther(totalInvestedAmount)))

      }
    } catch (err) {
      console.log(err);
      toast.error("Transaction was rejected");
    }
  } else {
    toast.error("Could not connect to the provider");
  }
};
