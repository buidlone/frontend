import { ethers } from "ethers";
import React, { useContext } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { ISlider } from "../../interfaces/ISlider";
import { StyledSlider, StyledThumb, StyledTrack } from "./styled";

const Thumb = (props: any, state: any) => <StyledThumb {...props} />;

const SumTrack = (props: any, state: any) => {
  return <StyledTrack {...props} index={props.index}></StyledTrack>;
};

const Slider = ({
  onChange,
  min,
  max,
  defaultValue = 0,
  value,
  step,
}: ISlider) => {
  const { hardCap } = useContext(LoadedValuesContext);

  const prop = {
    hardCap: ethers.utils.formatEther(hardCap),
  };

  return (
    <StyledSlider
      defaultValue={defaultValue}
      value={value ? value : 0}
      renderTrack={(props, state) => (
        <SumTrack {...props} prop={prop} index={state.index} />
      )}
      renderThumb={Thumb}
      min={min}
      max={max}
      onChange={onChange}
      step={step}
    />
  );
};

export default Slider;
