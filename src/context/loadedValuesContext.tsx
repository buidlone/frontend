import React, { createContext } from "react";
import {
  loadedValuesInitialState,
  LoadedValuesState,
  useLoadValues,
  
} from "../hooks/useLoadValues";

const LoadedValuesContext = createContext<LoadedValuesState>(
  loadedValuesInitialState
);

interface Props {
  children: React.ReactNode;
}

export function LoadedValuesContextProvider({ children }: Props) {
  const loadedValuesState = useLoadValues();

  return (
    <LoadedValuesContext.Provider value={loadedValuesState}>
      {children}
    </LoadedValuesContext.Provider>
  );
}

export default LoadedValuesContext;
