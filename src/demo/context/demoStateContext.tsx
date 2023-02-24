import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type DemoStateContextType = {
  isDemo: boolean;
  setIsDemo: React.Dispatch<React.SetStateAction<boolean>>;
};

const DemoStateContext = createContext<DemoStateContextType>({
  isDemo: false,
  setIsDemo: () => {},
});

export default DemoStateContext;
