import styled, { css } from "styled-components";
import { BlockWrapper } from "../fundingBlock/styled";
import breakpoints from "../../../styles/constants";

export const DetailsBlockWrapper = styled.div`
  background: #1f233c 0% 0% no-repeat padding-box;
  border: 1px solid #157fc1;
  border-radius: 27px;
  opacity: 1;
  width: 100%;
  opacity: 0.85;

  .bigger {
    font-size: 21px;
    @media screen and (${breakpoints.Device.mobile}) {
      font-size: 14px;
    }
  }

  .medium {
    font-size: 19px;
    @media screen and (${breakpoints.Device.mobile}) {
      font-size: 14px;
    }
  }

  .smaller {
    font-size: 18px;
    @media screen and (${breakpoints.Device.mobile}) {
      font-size: 14px;
    }
  }

  .blue {
    color: #00c4ff;
    opacity: 1;
  }
`;

export const FlexItem = styled.div`
  width: 36%;
  height: 344px;
  margin: 18px 41px;
  @media screen and (${breakpoints.Device.mobile}) {
    width: 100%;
    height: auto;
    margin: 25px 20px;
  }
`;

export const MobileDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(255 255 255 / 50%);
  margin: 0px 15px;
  display: none;
  @media screen and (${breakpoints.Device.mobile}) {
    display: block;
  }
`;

export const DetailsContentWrapper = styled.div`
  display: flex;
  align-items: start;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 991px) {
    & > ${FlexItem} {
      max-width: 100%;
      flex-basis: 100%;
      justify-content: center;
    }
  } ;
`;

export const DetailsTable = styled(BlockWrapper)`
  height: 386px;
  width: 100%;
  background: #1f233c 0% 0% no-repeat padding-box;
  border: 1px solid #157fc1;
  opacity: 0.85;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;

  .bigger {
    font-size: 21px;
  }

  .medium {
    font-size: 19px;
  }

  .smaller {
    font-size: 18px;
  }

  .blue {
    color: #00c4ff;
    opacity: 1;
  }
`;

export const FlexItem1 = styled.div`
  display: inline-block;
  width: 50%;
`;

export const Property = styled.p`
  color: white;
  font-family: "Barlow", sans-serif;
  font-size: 20px;
  text-align: left;
  opacity: 0.5;
  @media screen and (${breakpoints.Device.mobile}) {
    font-size: 14px;
  }
`;

export const Data = styled.p`
  color: white;
  font-family: "Barlow", sans-serif;
  font-size: 20px;
  text-align: right;
  opacity: 0.5;
  @media screen and (${breakpoints.Device.mobile}) {
    font-size: 14px;
  }
`;
