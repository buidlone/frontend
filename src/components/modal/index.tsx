import {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import Portal from "../portal";
import { Overlay } from "./styled";

interface IModal {
  show?: boolean;
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
}

const Modal = ({ show, children }: IModal) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? <Overlay>{children}</Overlay> : null;

  if (isBrowser) {
    return <Portal children={modalContent} selector="#portal"></Portal>;
  } else {
    return null;
  }
};

export default Modal;
