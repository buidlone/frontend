import styled from "styled-components";

export const DModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #1f233c 0% 0% no-repeat padding-box;
  border-radius: 20px;
  flex-wrap: wrap;
  max-width: 64.625rem;
  width: 100%;
  min-height: 30.563rem;
  z-index: 9999;
  position: relative;
  padding: 2.3rem 1.5rem;
  gap: 2.375rem;
  margin: 2.3rem 1.875rem;
`;

export const Header = styled.h5`
  display: flex;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 46px;
  font-weight: 400;
  margin: 0;
  color: #ecf0ef;
`;

export const MiddleSection = styled.div`
  max-width: 61.438rem;
  height: 15.5rem;
  background: #2e314d 0% 0% no-repeat padding-box;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  padding: 1.75rem 2rem 1.75rem 4.563rem;
  justify-content: space-between;
`;

export const MiddleSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.438rem;
  width: 100%;
  &.time {
    width: 20%;
  }
`;

export const StepBubble = styled.div`
  width: 0.813rem;
  height: 0.813rem;
  background: #171722 0% 0% no-repeat padding-box;
  border: 1px solid #ffc400;
  opacity: 1;
  border-radius: 50%;
`;
export const Text = styled.p`
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 18px;
  color: #ecf0ef;
  padding: 0;
  margin: 0;

  .orange {
    color: #ffc400;
  }
  .blue {
    color: #00c4ff;
  }
  &.grey {
    text-align: right;
    color: rgba(236, 240, 239, 0.4);
  }
`;

export const StepList = styled.div`
  margin-top: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${Text} {
    font-size: 14px;
  }
`;

export const StepListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.438rem;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.375rem;
`;
export const Button = styled.button`
  height: 2.5rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 300;
  width: 30%;
  color: #00c4ff;
  font-size: 18px;

  cursor: pointer;
  background: #2e314d;
  border: 1px solid #00c4ff;

  &.back {
    background: #1f233c;
    border: 1px solid #00c4ff;
    color: #00c4ff;
    width: 14.563rem;
  }

  &.start {
    background: #171722;
    border: 1px solid #ffc400;
    color: #ffc400;
    width: 17.563rem;
  }
`;
