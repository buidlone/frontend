interface Project {
    id?: number;
    name?: string;
    startDate?: string;
    end?: string;
    raised?: number;
    participants?: number;
    funds?: number;
    fundsReleased?: number;
    tokensReserved?: number;
  
    seed?: number;
    hardCap?: number;
    softCap?: {
      amount?: number;
      reservedUntil?: string;
      isReached?: boolean;
    };
  
    
    milestones?: number;
    milestonesCompleted?: number;
  
    invested?: number;
    collected?: number;
    claimed?: number;
    reserved?: number;
    state?: string;
    stages?: 
      {
        id?: number;
        name?: string;
        milestones?: {
            id?: number;
            description?: string;
            isCompleted?: boolean;
        }[];
        endDate: string;
        isCompleted: boolean;
        active: boolean;
      }[];
  }
  
  const project: Project = {
    id: 1,
    name: 'Buidl1',
    startDate: '2022-01-01',
    end: '2024-01-01',
  
    softCap: {
      amount: 34000,
      reservedUntil: '2022-06-01',
      isReached: false,
    },
    
    seed: 34000,
    hardCap: 34000,
  
    raised: 1245,
    participants: 234,
    funds: 324234,
    fundsReleased: 23452,
    tokensReserved: 4000000,
  
    milestones: 32, //will be calculated from the number of milestones in each stage, not hard-coded
    milestonesCompleted: 12, //will be calculated from the number of completed milestones in each stage, not hard-coded
  
    invested: 1245, //will be in the investor's data model
    collected: 125, //will be in the investor's data model
    claimed: 65, //will be in the investor's data model
    reserved: 6585, //will be in the investor's data model
    state: 'Ongoing', //will be derived, not hard-coded
    stages: [
      {
        id: 1,
        name: 'Stage 1',
        endDate: '2022-08-14',
        isCompleted: true,
        active: false,
        milestones: [
          {
            id: 1,
            description: 'Milestone1',
            isCompleted: true,
          },
          {
            id: 2,
            description: 'Milestone1',
            isCompleted: true,
          },
          {
            id: 3,
            description: 'Milestone1',
            isCompleted: true,
          },
          {
            id: 4,
            description: 'Milestone1',
            isCompleted: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Stage 2',
        milestones: [
          {
            id: 5,
            description: 'Milestone1',
            isCompleted: true,
          },
          {
            id: 6,
            description: 'Milestone1',
            isCompleted: true,
          },
          {
            id: 7,
            description: 'Milestone1',
            isCompleted: true,
          },
          {
            id: 8,
            description: 'Milestone1',
            isCompleted: false,
          },
        ],
        endDate: '2022-09-14',
        isCompleted: false,
        active: true,
      },
      {
        id: 3,
        name: 'Stage 3',
        milestones: [
          {
            id: 9,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 10,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 11,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 12,
            description: 'Milestone1',
            isCompleted: false,
          },
        ],
        endDate: '2022-10-14',
        isCompleted: false,
        active: false,
      },
      {
        id: 4,
        name: 'Stage 4',
        milestones: [
          {
            id: 13,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 14,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 15,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 17,
            description: 'Milestone1',
            isCompleted: false,
          },
        ],
        endDate: '2022-11-14',
        isCompleted: false,
        active: false,
      },
      {
        id: 5,
        name: 'Stage 5',
        milestones: [
          {
            id: 18,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 19,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 20,
            description: 'Milestone1',
            isCompleted: false,
          },
          {
            id: 21,
            description: 'Milestone1',
            isCompleted: false,
          },
        ],
        endDate: '2022-12-14',
        isCompleted: false,
        active: false,
      },
    ],
  };
  
  export default project;
  