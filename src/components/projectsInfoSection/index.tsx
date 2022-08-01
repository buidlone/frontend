import {
    TopText,
    MiddleText,
    BottomText,
    InfoSec,
    TextWrapper,
    Img,
    Line,
    ImgWrapper,
    
  } from './styled';
  import blocks from '../../../public/Group193.svg';
  
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
        <TextWrapper>
          <TopText>{text}</TopText>
          <MiddleText>{mainText}</MiddleText>
          <Line />
          <BottomText>{moto}</BottomText>
        </TextWrapper>
        <ImgWrapper>
          <Img src={blocks} alt={''} />
        </ImgWrapper>
      </InfoSec>
    );
  }
  