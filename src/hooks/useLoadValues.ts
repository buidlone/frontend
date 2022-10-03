import { useEffect, useReducer, useCallback, useState } from 'react'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { InvestmentPoolAddress, NEXT_PUBLIC_INFURA_ID } from '../constants/contractAddresses'
import InvestmentPoolABI from '../web3/abi/InvestmentPool.json'

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`)

export type LoadedValuesState = {
    softCap: number | null;
    totalInvested: number | null;
}

export const loadedValuesInitialState: LoadedValuesState = {
    softCap: null,
    totalInvested: null
}

export const useLoadValues = () => {
    const [softCap, setSoftCap] = useState<number|null>(null)
    const [totalInvested, setTotalInvested] = useState<number|null>(null)

    const getValuesFromInvestmentPool = async () => {
        if (provider) {
          try {
           const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
           const totalInvested= await contract.totalInvestedAmount();
           const softCap = await contract.softCap()
           setTotalInvested(Number(ethers.utils.formatUnits(totalInvested, 18)))
           setSoftCap(Number(ethers.utils.formatUnits(softCap, 18)))

         } catch (error) {
           console.log(error);
           toast.error("Error occurred while retrieving data from blockchain")
         }
        }
    }
    

    useEffect(() => {
        getValuesFromInvestmentPool()
    }, [])

    return {totalInvested, softCap}
}