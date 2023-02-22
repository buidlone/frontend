import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import { Currency } from "../interfaces/ILoadedValues";
import { getErrorMessage } from "../utils/getErrorMessage";
import ERC20TokenABI from "../web3/abi/ERC20Token.json";
import InvestmentPoolABI from "./abi/InvestmentPool.json";
import { addBuidl1Token } from "./addBuidl1Token";

export const invest = async (
  tokenAddress: string,
  web3Provider: any,
  amount: string,
  address: string,
  provider: any,
  tokenCurrency: Currency
) => {
  if (web3Provider) {
    const signer = web3Provider.getSigner();
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

      const amountBN = BigNumber.from(ethers.utils.parseEther(amount));
      if (amountBN.gt(allowance)) {
        const addedValue = amountBN.sub(allowance);

        const approvalTransaction = await tokenContract.increaseAllowance(
          InvestmentPoolAddress,
          addedValue
        );
        const approvalReceipt = await toast.promise(
          approvalTransaction.wait(),
          {
            pending: "Approval is pending",
            success: "Approval resolved",
            error: "Approval rejected",
          }
        );

        const investmentTransaction = await investmentPoolContract.invest(
          ethers.utils.parseEther(amount),
          false
        );

        const investmentReceipt = await toast.promise(
          investmentTransaction.wait(),
          {
            pending: "Transaction is pending",
            success: "Transaction was successful",
            error: "Transaction was rejected",
          }
        );

        addBuidl1Token(provider, web3Provider, address, tokenCurrency);
        const totalInvestedAmount =
          await investmentPoolContract.getTotalInvestedAmount();

        return totalInvestedAmount;
      } else {
        const investmentTransaction = await investmentPoolContract.invest(
          ethers.utils.parseEther(amount),
          false
        );

        const investmentReceipt = await toast.promise(
          investmentTransaction.wait(),
          {
            pending: "Transaction is pending",
            success: "Transaction was successful",
            error: "Transaction was rejected",
          }
        );
        addBuidl1Token(provider, web3Provider, address, tokenCurrency);
        const totalInvestedAmount =
          await investmentPoolContract.getTotalInvestedAmount();

        return totalInvestedAmount;
      }
    } catch (err: any) {
      if (err.error) {
        const revertData = err.error.data.originalError.data;
        const decodedError =
          investmentPoolContract?.interface?.parseError(revertData);

        toast.error(getErrorMessage(decodedError?.name));
      } else {
        toast.error("Transaction was rejected");
        return undefined;
      }
    }
  } else {
    toast.error("Could not connect to the provider");
  }
};
