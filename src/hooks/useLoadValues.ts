import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { InvestmentPoolAddress, NEXT_PUBLIC_INFURA_ID } from '../constants/contractAddresses'
import InvestmentPoolABI from '../web3/abi/InvestmentPool.json'
import { formatTime } from '../utils/formatTime'

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`)

export type LoadedValuesState = {
    softCap: number | null;
    totalInvested: number | null;
    fundraisingStartDate: string | null;
}

export const loadedValuesInitialState: LoadedValuesState = {
    softCap: null,
    totalInvested: null,
    fundraisingStartDate: null,
}


export const useLoadValues = () => {
    const [softCap, setSoftCap] = useState<number|null>(null)
    const [totalInvested, setTotalInvested] = useState<number|null>(null)
    const [fundraisingStartDate, setFundraisingStartDate] = useState<string | null>(null)

    const getValuesFromInvestmentPool = async () => {
        if (provider) {
          try {
           const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
           const totalInvested= await contract.totalInvestedAmount();
           const softCap = await contract.softCap()
           const fundraisingStartAt = await contract.fundraiserStartAt()
           const fundraisingStartDate = formatTime(fundraisingStartAt)
           setTotalInvested(Number(ethers.utils.formatEther(totalInvested)))
           setSoftCap(Number(ethers.utils.formatEther(softCap)))
           setFundraisingStartDate(fundraisingStartDate)


         } catch (error) {
           console.log(error);
           toast.error("Error occurred while retrieving data from blockchain")
         }
        }
    }
    

    useEffect(() => {
        getValuesFromInvestmentPool()
    }, [])

    return {totalInvested, softCap, fundraisingStartDate}
}