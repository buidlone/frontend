import React, { useContext } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import ProjectContext from "../../context/projectContext";
import {
  HardCapIndicator,
  SoftCapIndicator,
  STooltip,
  StyledSlider,
  StyledThumb,
  StyledTrack,
} from "./styled";

const Thumb = (props: any, state: any) => <StyledThumb {...props} />;

//Timeline Slider is still in progress
const TimelineThumb = (props: any, state: any) => (
  <StyledThumb {...props}>
    <STooltip className="timeline">2022/09</STooltip>
  </StyledThumb>
);

const Track = (props: any, state: any) => (
  <StyledTrack {...props} index={props.index} />
);

const SumTrack = (props: any, state: any) => {
  return (
    <>
      <SoftCapIndicator
        funds={props.prop.softCap}
        currency={props.prop.currency}
        softCapPosition={props.prop.softCapPosition}
      />

      <HardCapIndicator
        funds={props.prop.hardCap}
        currency={props.prop.currency}
      />

      <StyledTrack {...props} index={props.index}></StyledTrack>
    </>
  );
};

interface ISlider {
  onChange?: any;
  min?: any;
  max?: any;
  defaultValue?: number;
  value?: any;
  blue?: boolean;
  timeline?: boolean;
  step?: number;
}

const Slider = ({
  onChange,
  min,
  max,
  defaultValue = 0,
  value,
  blue,
  timeline,
  step
}: ISlider) => {
  const { softCap, hardCap, currency } = useContext(LoadedValuesContext);

  const prop = {
    softCap: softCap?.amount,
    hardCap: hardCap,
    currency: currency.label,
    softCapPosition: softCap?.amount && (softCap?.amount * 100) / hardCap,
  };

  return (
    <StyledSlider
      defaultValue={defaultValue}
      value={value ? value : 0}
      renderTrack={
        timeline
          ? (props, state) => <Track {...props} index={state.index} />
          : (props, state) => (
              <SumTrack {...props} prop={prop} index={state.index} />
            )
      }
      renderThumb={timeline ? TimelineThumb : Thumb}
      min={min}
      max={max}
      onChange={onChange}
      trackClassName={blue ? "blue" : ""}
      thumbClassName={blue ? "blue" : ""}
      step={step}
    />
  );
};

export default Slider;
