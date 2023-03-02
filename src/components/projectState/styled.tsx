import styled from "styled-components";

interface Props {
  isDemo?: boolean;
}

export const StateTextGreen = styled.span<Props>`
  color: rgb(0, 255, 196);
  font-size: ${(props) => (props.isDemo ? "14px" : "18px")};
`;

export const StateTextOrange = styled(StateTextGreen)`
  color: rgba(255, 137, 0, 1);
`;

export const StateTextBlue = styled(StateTextGreen)`
  color: rgba(0, 196, 255, 1);
`;

export const StateTextYellow = styled(StateTextGreen)`
  color: #ffeb00;
`;
