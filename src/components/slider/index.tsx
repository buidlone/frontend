import { STooltip, StyledSlider, StyledThumb, StyledTrack } from "./styled";

const Thumb = (props: any, state: any) => (
  <StyledThumb {...props}>
    <STooltip>{state.valueNow}</STooltip>
  </StyledThumb>
);

//Timeline Slider is still in progress
const TimelineThumb = (props: any, state: any) => (
  <StyledThumb {...props}>
    {/* <STooltip>{state.valueNow}</STooltip> */}
    <STooltip className="timeline">2022/09</STooltip>
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
  timeline?: boolean;
}

const Slider = ({
  onChange,
  min,
  max,
  defaultValue = 0,
  value,
  blue,
  timeline,
}: ISlider) => {
  return (
    <StyledSlider
      defaultValue={defaultValue}
      value={value ? value : 0}
      renderTrack={Track}
      renderThumb={timeline ? TimelineThumb : Thumb}
      min={min}
      max={max}
      onChange={onChange}
      trackClassName={blue ? "blue" : ""}
      thumbClassName={blue ? "blue" : ""}
    />
  );
};

export default Slider;
