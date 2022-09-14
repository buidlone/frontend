import { STooltip, StyledSlider, StyledThumb, StyledTrack } from "./styled";

const Thumb = (props: any, state: any) => (
  <StyledThumb {...props}>
    <STooltip>{state.valueNow}</STooltip>
  </StyledThumb>
);

const Track = (props: any, state: any) => (
  <StyledTrack {...props} index={state.index} />
);

interface ISlider {
  onChange?: any;
  min?: any;
  max?: any;
  defaultValue?: number;
  value?: any;
  blue?: boolean;
}

const Slider = ({
  onChange,
  min,
  max,
  defaultValue = 0,
  value,
  blue,
}: ISlider) => {
  return (
    <StyledSlider
      defaultValue={defaultValue}
      value={value ? value : 0}
      renderTrack={Track}
      renderThumb={Thumb}
      min={min}
      max={max}
      onChange={onChange}
      trackClassName={blue ? "blue" : ""}
      thumbClassName={blue ? "blue" : ""}
    />
  );
};

export default Slider;
