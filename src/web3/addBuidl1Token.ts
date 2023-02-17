import { BigNumber } from "ethers";
import { Buidl1TokenAddress } from "../constants/contractAddresses";
import { getTokenBalance } from "./getTokenBalance";

export const addBuidl1Token = async (
  provider: any,
  web3Provider: any,
  address: string,
  tokenCurrency: any
) => {
  try {
    const checkIfTokenExists = await getTokenBalance(
      tokenCurrency.address,
      web3Provider,
      address
    );
    if (BigNumber.from(checkIfTokenExists).gt(0)) {
      return;
    }
    await provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: Buidl1TokenAddress,
          symbol: tokenCurrency.label,
          decimals: tokenCurrency.decimals,
        },
      },
    });

    console.log("You have added BDL1 token");
  } catch (err) {
    console.log(err);
  }
};
