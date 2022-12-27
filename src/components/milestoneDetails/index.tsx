import { milestoneDetails } from "../../context/data";
import { Milestone } from "../../interfaces/ILoadedValues";
import { InlineRow, MilestoneDetailsWrapper } from "./styled";

interface IMilestoneDetailsProps {
  milestone: Milestone;
  date: string;
}

const MilestoneDetails = ({ milestone, date }: IMilestoneDetailsProps) => {
  const milestoneDetailsFromIPFS = milestoneDetails;

  return (
    <MilestoneDetailsWrapper>
      <InlineRow>
        <div className="stage">Milestone {milestone.id + 1}</div>
        <div className="date">{date}</div>
      </InlineRow>
      <div className="taskTitle">
        {
          milestoneDetailsFromIPFS.find(
            (element) => element.milestoneId == milestone.id
          )?.title
        }
      </div>
      <div className="description">
        {
          milestoneDetailsFromIPFS.find(
            (element) => element.milestoneId == milestone.id
          )?.description
        }
      </div>
    </MilestoneDetailsWrapper>
  );
};

export default MilestoneDetails;
