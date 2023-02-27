import React, { createContext, useState } from "react";
import {
  IMockData,
  initialMockData,
  MockDataContext,
} from "../mockData/initialMockData";

interface Props {
  children: React.ReactNode;
}

const DemoMockDataContext = createContext<MockDataContext>({
  mockData: initialMockData,
  setMockData: () => {},
});

export function DemoMockDataContextProdvider({ children }: Props) {
  const [mockData, setMockData] = useState<IMockData>(initialMockData);

  return (
    <DemoMockDataContext.Provider value={{ mockData, setMockData }}>
      {children}
    </DemoMockDataContext.Provider>
  );
}

export default DemoMockDataContext;
