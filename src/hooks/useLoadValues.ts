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

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);


export const loadedValuesInitialState: ILoadedValues = {
  softCap: {
    amount: null,
    isReached: null,
  },
  totalInvested: 0,
  fundraisingStartDate: null,
  fundraisingEndDate: null,
  milestones: [],
};

export const useLoadValues = () => {
  const [softCap, setSoftCap] = useState<SoftCap | null>(null);
  const [totalInvested, setTotalInvested] = useState<number>(0);
  const [fundraisingStartDate, setFundraisingStartDate] = useState<
    string | null
  >(null);
  const [fundraisingEndDate, setFundraisingEndDate] = useState<string | null>(
    null
  );
  const [milestones, setMilestones] = useState<Milestone[]>([]);

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
        const isSoftCapReached = await contract.isSoftCapReached();
        const fundraisingStartAt = await contract.fundraiserStartAt();
        const fundraisingStartDate = formatTime(fundraisingStartAt);
        const fundraisingEndAt = await contract.fundraiserEndAt();
        const fundraisingEndDate = formatTime(fundraisingEndAt);
        const milestoneCountHex = await contract.milestoneCount();
        const milestoneCount = milestoneCountHex.toNumber();

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

              seedAmount: seedAmount.toNumber(),
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
        setFundraisingStartDate(fundraisingStartDate);
        setFundraisingEndDate(fundraisingEndDate);
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
    fundraisingStartDate,
    fundraisingEndDate,
    milestones,
  };
};
