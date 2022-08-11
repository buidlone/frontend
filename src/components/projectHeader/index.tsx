import { ProjectHeadWrapper, StageText } from './styled';

interface Iheader {
  text?: string;
  stage?: string;
}

export default function ProjectHeader({ text, stage, ...props }: Iheader) {
  return (
    <>
      <ProjectHeadWrapper>{text}</ProjectHeadWrapper>
      <StageText>{stage}</StageText>
    </>
  );
}
