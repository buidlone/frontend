import { ListItem, Tooltip } from './styled';

interface IMilestones {
  milestonesArray?: {
    id?: number;
    description?: string;
    isCompleted?: boolean;
  }[];
}

const MilestonesTooltip = ({ milestonesArray }: IMilestones) => {
  return (
    <Tooltip>
      <ul>
        {milestonesArray &&
          milestonesArray.map((milestone) =>
            milestone.isCompleted ? (
              <ListItem key={milestone.id} className='completed'>
                {milestone.description}
              </ListItem>
            ) : (
              <ListItem key={milestone.id} className='uncompleted'>
                {milestone.description}
              </ListItem>
            )
          )}
      </ul>
    </Tooltip>
  );
};

export default MilestonesTooltip;
