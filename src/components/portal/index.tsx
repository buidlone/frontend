import {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface IPortal {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | JSX.Element
    | null;
  selector: string;
}

const Portal = ({ children, selector }: IPortal) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [selector]);

  return mounted
    ? createPortal(children, document.querySelector(selector)!)
    : null;
};

export default Portal;
