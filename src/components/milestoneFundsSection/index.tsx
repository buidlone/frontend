import { useContext, useEffect } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { ProjectState } from "../../interfaces/enums/ProjectStateEnums";
import { roundPrecise } from "../../utils/roundValue";
import {
  FundsBubble,
  FundsPlaceholder,
  FundsSection,
  MilestonePlaceholder,
} from "./styled";

const MilestoneFundsSection = () => {
  const { milestones, currentMilestone, currency, projectState } =
    useContext(LoadedValuesContext);

  useEffect(() => {}, [projectState]);

  switch (projectState) {
    case ProjectState.CANCELED:
      return <FundsSection />;
    case ProjectState.BEFORE_FUNDRAISER:
    case ProjectState.ONGOING_FUNDRAISER:
    case ProjectState.FUNDRAISER_ENDED_NO_MILESTONES_ONGOING:
      return (
        <FundsSection>
          <FundsBubble />
          <FundsPlaceholder>Funds streaming not started yet</FundsPlaceholder>
        </FundsSection>
      );
    case ProjectState.FAILED_FUNDRAISER:
      return <FundsSection></FundsSection>;
    case ProjectState.MILESTONES_ONGOING_BEFORE_LAST:
    case ProjectState.LAST_MILESTONE_ONGOING:
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
                    milestone.fundsAllocated.totalFundsAllocated
                  ).replace(/,/g, " ")}{" "}
                  {currency.label}
                </FundsPlaceholder>
              )
          )}
        </FundsSection>
      );
    case ProjectState.TERMINATED_BY_VOTING:
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
                    milestone.fundsAllocated.totalFundsAllocated
                  ).replace(/,/g, " ")}{" "}
                  {currency.label}
                </FundsPlaceholder>
              )
          )}
        </FundsSection>
      );
    case ProjectState.TERMINATED_DUE_TO_INACTIVITY:
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
                    milestone.fundsAllocated.totalFundsAllocated
                  ).replace(/,/g, " ")}{" "}
                  {currency.label}
                </FundsPlaceholder>
              )
          )}
        </FundsSection>
      );
    case ProjectState.SUCCESSFULLY_ENDED:
      return (
        <FundsSection>
          <FundsBubble />
        </FundsSection>
      );
    case ProjectState.UNKNOWN:
      return <FundsSection />;
    default:
      return <FundsSection />;
  }
};

export default MilestoneFundsSection;
