
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { InvestmentPoolAddress, NEXT_PUBLIC_INFURA_ID } from '../constants/contractAddresses'
import InvestmentPoolABI from './abi/InvestmentPool.json'

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`)

export const isInvestingAllowed = async () => {
   
        if (provider) {
          try {
           const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
           const isFundraiserActive = await contract.isFundraiserOngoingNow();
           const isLastMilestoneActive = await contract.isLastMilestoneOngoing();
           return isFundraiserActive && !isLastMilestoneActive
         } catch (error) {
           console.log(error);
           toast.error("Error occurred while retrieving data from blockchain")
         }
        }


 
    


}