
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { InvestmentPoolAddress, NEXT_PUBLIC_INFURA_ID } from '../constants/contractAddresses'
import InvestmentPoolABI from './abi/InvestmentPool.json'

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`)

export const isInvestingAllowed = async () => {
   
        if (provider) {
          try {
           const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
           const projectState = await contract.getProjectStateByteValue();
           const totalInvestedAmount = await contract.totalInvestedAmount()
           const hardCap = await contract.hardCap()
           
           
           if([4, 32].includes(parseInt(projectState, 10)) && (totalInvestedAmount !== hardCap)) {
              return {
                state: true,
                 projectState: parseInt(projectState, 10)
               }
           }
           return {
            state: false,
            projectState: parseInt(projectState, 10)
           }
        
         } catch (error) {
           console.log(error);
           toast.error("Error occurred while retrieving data from blockchain")
         }
        }
       



 
    


}