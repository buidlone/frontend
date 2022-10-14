import React, { createContext } from "react";
import {
  loadedValuesInitialState,
  useLoadValues,
} from "../hooks/useLoadValues";
import { ILoadedValues } from "../interfaces/ILoadedValues";

const LoadedValuesContext = createContext<ILoadedValues>(
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
