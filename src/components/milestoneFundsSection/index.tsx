import { useContext, useEffect } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { IMilestoneFundsAllocated } from "../../interfaces/ILoadedValues";
import {
  FundsBubble,
  FundsPlaceholder,
  FundsSection,
  MilestonePlaceholder,
} from "./styled";

interface IMilestoneFunds {
  milestoneFunds: IMilestoneFundsAllocated[];
}
const MilestoneFundsSection = ({
  milestoneFunds,
  ...props
}: IMilestoneFunds) => {
  const { milestones, currentMilestone, currency, projectState } =
    useContext(LoadedValuesContext);

  useEffect(() => {}, [projectState]);

  switch (projectState) {
    case 1:
      return <FundsSection></FundsSection>;
    case 2:
    case 4:
    case 16:
      return (
        <FundsSection>
          <FundsBubble />
          <FundsPlaceholder>Funds streaming not started yet</FundsPlaceholder>
        </FundsSection>
      );
    case 8:
      return <FundsSection></FundsSection>;
    case 32:
    case 64:
      return (
        <FundsSection>
          <MilestonePlaceholder>{`M${
            currentMilestone + 1
          }`}</MilestonePlaceholder>
          <FundsBubble active />
          {milestones.map(
            (milestone, index) =>
              milestone.id == currentMilestone && (
                <FundsPlaceholder>
                  {Number(milestoneFunds[index]?.totalFundsAllocated)
                    .toFixed(4)
                    .toString()
                    .replace(/,/g, " ")}{" "}
                  {currency.label}
                </FundsPlaceholder>
              )
          )}
        </FundsSection>
      );
    case 128:
      return (
        <FundsSection>
          <MilestonePlaceholder suspended>{`M${
            currentMilestone + 1
          }`}</MilestonePlaceholder>
          <FundsBubble active />
          {milestones.map(
            (milestone, index) =>
              milestone.id == currentMilestone && (
                <FundsPlaceholder suspended>
                  {Number(milestoneFunds[index]?.totalFundsAllocated)
                    .toFixed(4)
                    .toString()
                    .replace(/,/g, " ")}{" "}
                  {currency.label}
                </FundsPlaceholder>
              )
          )}
        </FundsSection>
      );
    case 256:
      return <FundsSection></FundsSection>;
    case 512:
      return (
        <FundsSection>
          <FundsBubble />
        </FundsSection>
      );
    case 1024:
      return <FundsSection></FundsSection>;
    default:
      return <FundsSection></FundsSection>;
  }
};

export default MilestoneFundsSection;
