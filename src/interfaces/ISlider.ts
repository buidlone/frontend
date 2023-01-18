export interface ISlider {
  onChange?: (value: any) => void;
  min?: number;
  max?: number;
  defaultValue?: number;
  value?: any;
  step?: number;
}
