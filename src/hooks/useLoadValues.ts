import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import {
  InvestmentPoolAddress,
  NEXT_PUBLIC_INFURA_ID,
} from "../constants/contractAddresses";
import InvestmentPoolABI from "../web3/abi/InvestmentPool.json";
import { formatTime } from "../utils/formatTime";
import { ILoadedValues, Milestone, SoftCap } from "../interfaces/ILoadedValues";
import { Currency } from "../constants/currencies";
import ERC20TokenABI from '../web3/abi/ERC20Token.json'


const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

export const loadedValuesInitialState: ILoadedValues = {
  softCap: {
    amount: 0,
    isReached: false,
  },
  totalInvested: 0,
  fundraisingStartDate: null,
  fundraisingEndDate: null,
  milestones: [],
  currentMilestone: -1,
  hardCap: 0,
  projectState: 0,
  currency: {
    value: "",
  label: "",
  address: "",
  decimals: 0,
},
  setTotalInvested: null,
 

};

export const useLoadValues = () => {
  const [softCap, setSoftCap] = useState<SoftCap>({amount: 0, isReached: false});
  const [hardCap, setHardCap] = useState<number>(0)
  const [totalInvested, setTotalInvested] = useState<number>(0);
  const [fundraisingStartDate, setFundraisingStartDate] = useState<
    string | null
  >(null);
  const [fundraisingEndDate, setFundraisingEndDate] = useState<string | null>(
    null
  );
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [currentMilestone, setCurrentMilestone] = useState<number>(-1);
  const [projectState, setProjectState] = useState<number>(0)
  const [currency, setCurrency] = useState<Currency>( {
  value: "",
  label: "",
  address: "",
  decimals: 0,
  })

  const getAvailableCurrencies = async (tokenAddress: string) => {

    if (provider) {
      try {
       const tokenContract = new ethers.Contract(tokenAddress, ERC20TokenABI, provider);
       const tokenDecimals = await tokenContract.decimals()
       const tokenSymbol = await tokenContract.symbol()
       return {tokenSymbol, tokenDecimals}
     } catch (error) {
       console.log(error);
       toast.error("Error occurred while retrieving currency data from blockchain")
     }
    }

}

  const getValuesFromInvestmentPool = async () => {
    if (provider) {
      try {
        const contract = new ethers.Contract(
          InvestmentPoolAddress,
          InvestmentPoolABI,
          provider
        );
       
        const totalInvested = await contract.totalInvestedAmount();
        const softCap = await contract.softCap();
        const hardCap = await contract.hardCap();
        const isSoftCapReached = await contract.isSoftCapReached();
        const fundraisingStartAt = await contract.fundraiserStartAt();
        const fundraisingStartDate = formatTime(fundraisingStartAt);
        const fundraisingEndAt = await contract.fundraiserEndAt();
        const fundraisingEndDate = formatTime(fundraisingEndAt);
        const projectState = await contract.getProjectStateByteValue();
        const acceptedTokenAddress = await contract.acceptedToken()
        const acceptedTokenDetails = await getAvailableCurrencies(acceptedTokenAddress)
        setCurrency({
          value: acceptedTokenDetails?.tokenSymbol,
          label:acceptedTokenDetails?.tokenSymbol,
          address: acceptedTokenAddress,
          decimals: acceptedTokenDetails?.tokenDecimals
        })
        
        const milestoneCount = (await contract.milestoneCount()).toNumber();
        const currentMilestone = (await contract.currentMilestone()).toNumber();
      
        setCurrentMilestone(currentMilestone) 
        ;
        for (let i = 0; i < milestoneCount; i++) {
          let milestone = await contract.milestones(i);
          let seedAmount = await contract.getMilestoneSeedAmount(i);

          setMilestones((prevData) => [
            ...prevData,
            {
              id: i,
              startDate: formatTime(milestone?.startDate),
              endDate: formatTime(milestone?.endDate),
              paid: milestone?.paid,

              seedAmount: seedAmount.toString(),
              seedAmountPaid: milestone?.seedAmountPaid,
              streamOngoing: milestone?.streamOngoing,
            },
          ]);
        }

        setTotalInvested(Number(ethers.utils.formatEther(totalInvested)));
        setSoftCap({
          amount: Number(ethers.utils.formatEther(softCap)),
          isReached: isSoftCapReached,
        });
        setHardCap(Number(ethers.utils.formatEther(hardCap)))
        setFundraisingStartDate(fundraisingStartDate);
        setFundraisingEndDate(fundraisingEndDate);
        setProjectState(parseInt(projectState, 10))
      } catch (error) {
        console.log(error);
        toast.error("Error occurred while retrieving data from blockchain");
      }
    }

  };

  useEffect(() => {
    getValuesFromInvestmentPool();
  }, []);

  return {
    totalInvested,
    softCap,
    hardCap,
    fundraisingStartDate,
    fundraisingEndDate,
    milestones,
    currentMilestone,
    projectState,
    currency,
    setTotalInvested
  };
};

