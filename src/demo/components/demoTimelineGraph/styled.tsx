import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
		transform: scale(0.95);
		
	}

	70% {
		transform: scale(1);
	
	}

	100% {
		transform: scale(0.95);
		
	}
`;

export const InvestigateIcon = styled.span`
  position: absolute;
  font-size: 40px;
  color: #ffbc0d;
  top: 50%;
  left: 28.5%;
  z-index: 1000;
  cursor: pointer;
  animation: ${bounce} 2s infinite;
`;
