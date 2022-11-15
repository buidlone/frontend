import { IMilestoneFundsAllocated } from "../../interfaces/ILoadedValues";
import { List } from "./styled";

interface IMilestones {
  milestonesArray?: {
    id?: number;
    description?: string;
    isCompleted?: boolean;
  }[];
  fundsObject?: IMilestoneFundsAllocated;
}

const TooltipList = ({ milestonesArray, fundsObject }: IMilestones) => {
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
      <List>
        {fundsObject && (
          <>
            <li className="funds">From Seed: {fundsObject.seedAllocated}</li>
            <li className="funds">
              From Stream: {fundsObject.streamAllocated}
            </li>
          </>
        )}
      </List>
    );
  }
};

export default TooltipList;
