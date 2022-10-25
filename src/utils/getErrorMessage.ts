export const getErrorMessage = (error: string) => {
    switch (error) {
      case "InvestmentPool__CannotInvestAboveHardCap":
        return "Unable to invest above Hard Cap";
  
      case "InvestmentPool__ZeroAmountProvided":
        return "Invested amount must be greater than 0";
  
      case "GovernancePool__amountIsZero":
        return "Invested amount must be greater than 0";
  
      case "InvestmentPool__SuperTokenTransferFailed":
        return "Token transfer failed";
  
      case "InvestmentPool__CurrentStateIsNotAllowed":
        return "Current project state does not allow investing ";
  
      default:
        return "Transaction was rejected";
    }
  };