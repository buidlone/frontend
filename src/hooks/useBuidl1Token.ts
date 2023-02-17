import { useContext, useEffect } from "react";

import { Buidl1TokenAddress } from "../constants/contractAddresses";
import LoadedValuesContext from "../context/loadedValuesContext";
import Web3Context from "../context/web3Context";
import { getTokenBalance } from "../web3/getTokenBalance";

const useAddBuidl1Token = () => {
  const { provider, address, web3Provider } = useContext(Web3Context);
  const { tokenCurrency } = useContext(LoadedValuesContext);

  const checkIfTokenExists = async () => {
    const response = await getTokenBalance(
      tokenCurrency.address,
      web3Provider,
      address
    );
    console.log(response);
  };

  const addToken = async () => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      const existingToken = await provider.request({
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
  useEffect(() => {
    if (provider && tokenCurrency && address) {
      checkIfTokenExists();
     // addToken();
    }
  }, [provider, tokenCurrency, address]);
};

export default useAddBuidl1Token;
