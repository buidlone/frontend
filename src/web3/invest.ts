import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import { getErrorMessage } from "../utils/getErrorMessage";
import ERC20TokenABI from "../web3/abi/ERC20Token.json";
import InvestmentPoolABI from "./abi/InvestmentPool.json";


export const invest = async (
  tokenAddress: string,
  provider: any,
  amount: number,
  address: string
) => {
  if (provider) {
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
    try {
      const allowance = await tokenContract.allowance(
        address,
        InvestmentPoolAddress
      );
     
      
      if (amount > Number(ethers.utils.formatEther(allowance.toString()))) {

        const bigAmount = BigNumber.from(ethers.utils.parseEther(amount.toString()))
        const addedValue = bigAmount.sub(allowance)

        const approvalTransaction = await tokenContract.increaseAllowance(
          InvestmentPoolAddress,
          addedValue
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
    } catch (err: any) {
      
      if(err.error) {
      const revertData = err.error.data.originalError.data;
      const decodedError = investmentPoolContract?.interface?.parseError(revertData);

      toast.error(getErrorMessage(decodedError?.name));
      } else {
        toast.error('Transaction was rejected');
      }
    }
  } else {
    toast.error("Could not connect to the provider");
  }
};
