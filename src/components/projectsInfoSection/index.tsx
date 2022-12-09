import { TopText, BottomText, InfoSec, Line } from "./styled";


interface Iheader {
  text?: string;
  mainText?: string;
  moto?: string;
}

export default function ProjectsInfoSection({
  text,
  mainText,
  moto,
  ...props
}: Iheader) {
  return (
    <InfoSec>
      <TopText>{text}</TopText>

      <Line />

      <BottomText> CONNECT YOUR WALLET TO GET STARTED </BottomText>
    </InfoSec>
  );
}
