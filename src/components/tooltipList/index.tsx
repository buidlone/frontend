import { useContext } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { IMilestoneFundsAllocated } from "../../interfaces/ILoadedValues";
import { InfoBlock, InlineWrapper, List, TooltipWrapper } from "./styled";

interface IMilestones {
  milestonesArray?: {
    id?: number;
    description?: string;
    isCompleted?: boolean;
  }[];
  fundsObject?: IMilestoneFundsAllocated;
  index?: number;
}

const TooltipList = ({ milestonesArray, fundsObject, index }: IMilestones) => {
  const { currency } = useContext(LoadedValuesContext);

  if (milestonesArray) {
    return (
      <List>
        {milestonesArray &&
          milestonesArray.map((milestone, index) =>
            milestone.isCompleted ? (
              <li key={index} className="completed">
                {milestone.description}
              </li>
            ) : (
              <li key={milestone.id} className="uncompleted">
                {milestone.description}
              </li>
            )
          )}
      </List>
    );
  } else {
    return (
      <TooltipWrapper>
        {fundsObject && index && (
          <>
            <div className="title">Milestone {index}</div>
            <InlineWrapper>
              <InfoBlock>
                <div className="label">Instant release</div>
                <InlineWrapper>
                  <div className="funds">
                    {fundsObject.seedAllocated} {currency.label}
                  </div>
                </InlineWrapper>
              </InfoBlock>
              <InfoBlock>
                <div className="label">Streaming</div>

                <InlineWrapper>
                  <div className="funds">
                    {fundsObject.streamAllocated} {currency.label}
                  </div>
                </InlineWrapper>
              </InfoBlock>
            </InlineWrapper>
          </>
        )}
      </TooltipWrapper>
    );
  }
};

export default TooltipList;
