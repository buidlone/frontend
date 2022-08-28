import { List } from './styled';

interface IMilestones {
  milestonesArray?: {
    id?: number;
    description?: string;
    isCompleted?: boolean;
  }[];
}

const TooltipList = ({ milestonesArray }: IMilestones) => {
  return (
    <List>
      {milestonesArray &&
        milestonesArray.map((milestone, index) =>
          milestone.isCompleted ? (
            <li key={index} className='completed'>
              {milestone.description}
            </li>
          ) : (
            <li key={milestone.id} className='uncompleted'>
              {milestone.description}
            </li>
          )
        )}
    </List>
  );
};

export default TooltipList;
