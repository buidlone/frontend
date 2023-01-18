// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { BigNumber } from "ethers";
import { stat } from "fs";
import React, { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { ISlider } from "../../interfaces/ISlider";
import { StyledThumb, StyledTrack } from "../slider/styled";
import {
  HardCapIndicator,
  SoftCapIndicator,
  StyledTimelineSlider,
} from "./styled";

//Timeline Slider is still in progress
const Thumb = (props: any, state: any) => {
  return <StyledThumb {...props}></StyledThumb>;
};

const Track = (props: any, state: any) => {
  return (
    <>
      <SoftCapIndicator softCapPosition={props.prop.softCapPosition} />

      <HardCapIndicator />

      <StyledTrack {...props} index={props.index}></StyledTrack>
    </>
  );
};

interface ITimeline {
  markerValue: number;
}
type Props = ISlider & ITimeline;

const TimelineSlider = ({ onChange, value, markerValue }: Props) => {
  const { softCap, hardCap } = useContext(LoadedValuesContext);
  const [softCapPosition, setSoftCapPosition] = useState(
    Number(softCap.amount.mul(BigNumber.from(100)).div(hardCap))
  );

  const prop = {
    softCapPosition: softCapPosition,
  };

  return (
    <>
      <StyledTimelineSlider
        defaultValue={markerValue}
        value={value}
        renderTrack={(props, state) => (
          <Track {...props} prop={prop} index={state.index}></Track>
        )}
        renderThumb={Thumb}
        min={0}
        max={100}
        onChange={onChange}
        markClassName="example-mark"
        marks={[markerValue]}
        step={1}
        renderMark={(props) => <div data-label="current" {...props}></div>}
      />
    </>
  );
};

export default TimelineSlider;
