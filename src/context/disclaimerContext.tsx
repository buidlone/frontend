import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const DisclaimerContext = createContext<any>(undefined);

export function DisclaimerContextProdvider({ children }: Props) {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <DisclaimerContext.Provider value={{ showDisclaimer, setShowDisclaimer }}>
      {children}
    </DisclaimerContext.Provider>
  );
}

export default DisclaimerContext;
