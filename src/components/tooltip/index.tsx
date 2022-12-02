import React, {
  JSXElementConstructor,
  ReactElement,
  useRef,
  useState,
} from "react";
import { IMilestoneFundsAllocated } from "../../interfaces/ILoadedValues";
import Portal from "../portal";
import TooltipList from "../tooltipList";
import { StyledTooltip } from "./styled";

type PositionFn = (p: string) => {
  current: string;
  negate(): string;
  isHorizontal(): boolean;
  isVertical(): boolean;
};

type PointFn = () => {
  x: number;
  y: number;
  reset(p: any): void;
  restrictRect(rect: any): void;
};

export const position: PositionFn = (p: string) => ({
  current: p,
  negate() {
    if (this.current === "left") return "right";
    if (this.current === "right") return "left";
    if (this.current === "top") return "bottom";
    if (this.current === "bottom") return "top";
    return "";
  },
  isHorizontal() {
    return this.current === "left" || this.current === "right";
  },
  isVertical() {
    return this.current === "top" || this.current === "bottom";
  },
});

const point: PointFn = () => ({
  x: 0,
  y: 0,
  reset(p) {
    this.x = p.x;
    this.y = p.y;
  },
  restrictRect(rect) {
    if (this.x < rect.l) this.x = rect.l;
    else if (this.x > rect.r) this.x = rect.r;
    if (this.y < rect.t) this.y = rect.t;
    else if (this.y > rect.b) this.y = rect.b;
  },
});

const getPoint = (
  el: HTMLSpanElement,
  tt: HTMLSpanElement,
  placement: string,
  space: number
) => {
  let recurCount = 0;
  const pt = point();

  const bdys = {
    l: space,
    t: space,
    r: document.body.clientWidth - (tt.clientWidth + space),
    b: window.innerHeight - (tt.clientHeight + space),
  };

  const elRect = el.getBoundingClientRect();

  return (function recursive(placement) {
    recurCount++;
    const pos = position(placement);
    switch (pos.current) {
      case "left":
        pt.x = elRect.left - (tt.offsetWidth + space);
        pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
        break;
      case "right":
        pt.x = elRect.right + space;
        pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
        break;
      case "top":
        pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
        pt.y = elRect.top - (tt.offsetHeight + space);
        break;
      default:
        pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
        pt.y = elRect.bottom + space;
    }

    if (recurCount < 3)
      if (
        (pos.isHorizontal() && (pt.x < bdys.l || pt.x > bdys.r)) ||
        (pos.isVertical() && (pt.y < bdys.t || pt.y > bdys.b))
      ) {
        pt.reset(recursive(pos.negate()));
      }

    // restrict to rect boundary
    pt.restrictRect(bdys);

    return pt;
  })(placement);
};

interface ITooltip {
  milestonesArray?: {
    id?: number;
    description?: string;
    isCompleted?: boolean;
  }[];
  fundsObject?: IMilestoneFundsAllocated;
  text?: string;
  placement?: string;
  space?: number;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  disabled?: number;
  delay?: number;
  nowrap?: boolean;
}

export interface IPosition {
  x: number | null;
  y: number | null;
}

const Tooltip = ({
  milestonesArray,
  fundsObject,
  text,
  placement = "top",
  space = 15,
  children,
  disabled = 0,
  delay,
  nowrap = false,
  ...props
}: ITooltip) => {
  const [show, setShow] = useState(0);
  const posRef = useRef<IPosition>({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLSpanElement | null>(null);

  const handleMOver = (e: React.MouseEvent<HTMLSpanElement>) => {
    setShow(1);

    if (tooltipRef.current !== null) {
      posRef.current = getPoint(
        e.currentTarget,
        tooltipRef.current,
        placement,
        space
      );
    }
  };

  const handleMOut = () => setShow(0);

  return (
    <>
      {disabled
        ? children
        : React.cloneElement(children, {
            onMouseOver: handleMOver,
            onMouseOut: handleMOut,
          })}
      {disabled || (
        <Portal selector="#portal">
          <StyledTooltip
            delay={delay}
            ref={tooltipRef}
            posRef={posRef}
            show={show}
            placement={placement}
            nowrap={nowrap}
          >
            {milestonesArray && (
              <TooltipList milestonesArray={milestonesArray} />
            )}
            {fundsObject && <TooltipList fundsObject={fundsObject} />}
            {text}
          </StyledTooltip>
        </Portal>
      )}
    </>
  );
};

export default Tooltip;
