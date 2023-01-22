import { BigNumber, ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { ISlider } from "../../interfaces/ISlider";
import { StyledThumb, StyledTrack } from "../slider/styled";

import {
  HardCapIndicator,
  SoftCapIndicator,
  StyledTimelineSlider,
} from "./styled";

const Thumb = (props: any, state: any) => {
  return <StyledThumb blue {...props} />;
};

const Track = (props: any, state: any) => {
  return (
    <>
      <SoftCapIndicator softCapPosition={props.prop.softCapPosition} />

      <HardCapIndicator />

      <StyledTrack blue {...props} index={props.index}></StyledTrack>
    </>
  );
};

interface ITimeline {
  markerValue: string;
  handleMarkerClick: (e: React.MouseEvent<HTMLElement>) => void;
}
type Props = ISlider & ITimeline;

const TimelineSlider = ({
  onChange,
  value,
  markerValue,
  step,
  handleMarkerClick,
}: Props) => {
  const { softCap, hardCap, projectState } = useContext(LoadedValuesContext);
  const [softCapPosition, setSoftCapPosition] = useState(
    Number(softCap.amount.mul(BigNumber.from(100)).div(hardCap))
  );

  const prop = {
    softCapPosition: softCapPosition,
  };

  return (
    <StyledTimelineSlider
      defaultValue={[Number(markerValue)]}
      value={Number(Number(value).toFixed(4))}
      renderTrack={(props, state) => (
        <Track {...props} prop={prop} index={state.index}></Track>
      )}
      renderThumb={Thumb}
      min={0}
      max={Number(ethers.utils.formatEther(hardCap))}
      onChange={onChange}
      marks={[Number(markerValue)]}
      step={step}
      markClassName="example-mark"
      started={[4, 16, 32, 64, 128].includes(projectState)}
      renderMark={(props) => (
        <div data-label="current" onClick={handleMarkerClick} {...props}></div>
      )}
    />
  );
};

export default TimelineSlider;
