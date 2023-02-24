import Image from "next/image";
import styled from "styled-components";

interface Props {
  statusColor: string;
}

export const InfoBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #1f233c;
  border-radius: 20px;
  width: 100%;
  height: 16.688rem;
  //margin-top: 1.9rem;
  position: relative;
  padding: 1.893rem 1.875rem;
  gap: 1.438rem;
`;

export const InsideBlockWrapper = styled.div`
  background: #2e314d;
  border-radius: 20px;
  height: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.844rem 1.906rem;
  gap: 1.274rem;
  position: relative;
`;

export const InlineRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.828rem;
`;

export const DemoProjectLogo = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DemoProjectLogoInner = styled(Image)`
  height: 32px;
  width: 32px;
`;

export const DemoProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.55rem;
  width: 80%;

  & > p {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  .label {
    font-family: "Space Grotesk", sans-serif;
    font-size: 14px;
    color: rgba(228, 228, 228, 0.51);
    margin-bottom: -0.8%;
  }

  .name {
    font-family: "Space Grotesk", sans-serif;
    font-size: 24px;
    color: #00c4ff;
  }

  .details {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 16px;
    color: rgba(228, 228, 228, 1);
  }
`;

export const DemoRoundSection = styled.div`
  width: 20%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 14%;
  right: 2%;
`;

export const DemoRound = styled.div<Props>`
  font-size: 14px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  color: ${(props) => props.statusColor};
  text-align: left;
  white-space: nowrap;
  position: relative;

  &:before {
    content: "";
    background: ${(props) => props.statusColor};
    box-shadow: 0px 0px 9px ${(props) => props.statusColor};
    opacity: 1;
    border-radius: 50%;
    right: calc(100% + 0.9rem);
    top: 21%;
    width: 0.85rem;
    height: 0.85rem;
    position: absolute;
  }
`;
