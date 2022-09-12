import React, { MutableRefObject, RefObject, useEffect, useRef } from "react";


const useClickOutside = (handler: Function) => {
    const domNode = useRef<HTMLElement | null>(null);
  
    useEffect(() => {
      let maybeHandler = (event: any) => {
        if (!domNode.current?.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    }, []);
  
    return domNode;
  };

  export default useClickOutside;
  