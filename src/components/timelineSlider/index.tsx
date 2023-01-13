// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { BigNumber } from "ethers";
import React, { useContext } from "react";
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

const TimelineSlider = ({ onChange, value }: ISlider) => {
  const { softCap, hardCap, totalInvested } = useContext(LoadedValuesContext);

  const prop = {
    softCapPosition: Number(
      softCap.amount.mul(BigNumber.from(100)).div(hardCap)
    ),
  };

  return (
    <>
      <StyledTimelineSlider
        defaultValue={totalInvested}
        value={value ? value : totalInvested}
        renderTrack={(props, state) => (
          <Track {...props} prop={prop} index={state.index} />
        )}
        renderThumb={Thumb}
        min={0}
        max={hardCap}
        onChange={onChange}
        markClassName="example-mark"
        marks={[totalInvested]}
        step={1}
        renderMark={(props) => <div data-label="current" {...props} />}
      />
    </>
  );
};

export default TimelineSlider;
