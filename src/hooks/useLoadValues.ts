import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { InvestmentPoolAddress, NEXT_PUBLIC_INFURA_ID } from '../constants/contractAddresses'
import InvestmentPoolABI from '../web3/abi/InvestmentPool.json'
import { formatTime } from '../utils/formatTime'

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`)

export type LoadedValuesState = {
    softCap: number | null;
    totalInvested: number;
    fundraisingStartDate: string | null;
    fundraisingEndDate: string | null;
    projectState: number;
}

export const loadedValuesInitialState: LoadedValuesState = {
    softCap: null,
    totalInvested: 0,
    fundraisingStartDate: null,
    fundraisingEndDate: null,
    projectState: 0,
}


export const useLoadValues = () => {
    const [softCap, setSoftCap] = useState<number|null>(null)
    const [totalInvested, setTotalInvested] = useState<number>(0)
    const [fundraisingStartDate, setFundraisingStartDate] = useState<string | null>(null)
    const [fundraisingEndDate, setFundraisingEndDate] = useState<string | null>(null)
    const [projectState, setProjectState] = useState<number>(0)
    
    const getValuesFromInvestmentPool = async () => {
        if (provider) {
          try {
           const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
           const totalInvested = await contract.totalInvestedAmount();
           const softCap = await contract.softCap()
           const fundraisingStartAt = await contract.fundraiserStartAt()
           const fundraisingStartDate = formatTime(fundraisingStartAt)
           const fundraisingEndAt = await contract.fundraiserEndAt()
           const fundraisingEndDate = formatTime(fundraisingEndAt)
           const projectState = await contract.getProjectStateByteValue();
         
           setTotalInvested(Number(ethers.utils.formatEther(totalInvested)))
           setSoftCap(Number(ethers.utils.formatEther(softCap)))
           setFundraisingStartDate(fundraisingStartDate)
           setFundraisingEndDate(fundraisingEndDate)
           setProjectState(parseInt(projectState, 10))

         } catch (error) {
           console.log(error);
           toast.error("Error occurred while retrieving data from blockchain")
         }
        }
    }

    useEffect(() => {
        getValuesFromInvestmentPool()  
    }, [])

    return {totalInvested, softCap, fundraisingStartDate, fundraisingEndDate, projectState}
}