import { useContext, useEffect } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { IMilestoneFundsAllocated } from "../../interfaces/ILoadedValues";
import { roundPrecise } from "../../utils/roundValue";
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
      return <FundsSection />;
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
              milestone.milestoneId == currentMilestone && (
                <FundsPlaceholder key={milestone.milestoneId}>
                  {roundPrecise(
                    milestoneFunds[index]?.totalFundsAllocated
                  ).replace(/,/g, " ")}{" "}
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
              milestone.milestoneId == currentMilestone && (
                <FundsPlaceholder key={milestone.milestoneId} suspended>
                  {roundPrecise(
                    milestoneFunds[index]?.totalFundsAllocated
                  ).replace(/,/g, " ")}{" "}
                  {currency.label}
                </FundsPlaceholder>
              )
          )}
        </FundsSection>
      );
    case 256:
      return <FundsSection />;
    case 512:
      return (
        <FundsSection>
          <FundsBubble />
        </FundsSection>
      );
    case 1024:
      return <FundsSection />;
    default:
      return <FundsSection />;
  }
};

export default MilestoneFundsSection;
