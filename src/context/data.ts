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

  seed?: {
    fundsRequired: number;
    isCollected: boolean;
  };
  hardCap?: {
  amount?: number;
  isReached?: boolean;
};
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
  investors?: 
  {
    id: number;
    invested: number;
  }[];
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
      duration?: string;
    }[];
}




const project: Project = {
  id: 1,
  name: 'Buidl1',
  startDate: '2022-01-01',
  end: '2024-01-01',
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
  seed: {
    fundsRequired: 14000,
    isCollected: true,
  },softCap: {
    amount: 34000,
    reservedUntil: '2022-06-01',
    isReached: true,
  },
  hardCap: {
    amount: 54000,
    isReached: false,
  },
  investors: [
    {
      id: 1,
      invested: 1
    },
    {
      id: 2,
      invested: 2765
    },
    {
      id: 3,
      invested: 58
    },
    {
      id: 4,
      invested: 9875
    },
    {
      id: 5,
      invested: 23223
    },
    {
      id: 6,
      invested: 987
    },
    {
      id: 7,
      invested: 12
    },
    {
      id: 8,
      invested: 1999
    },
    {
      id: 9,
      invested: 1445
    },
    {
      id: 10,
      invested: 178
    },{
      id: 11,
      invested: 1987
    },{
      id: 12,
      invested: 134
    },{
      id: 13,
      invested: 1
    },{
      id: 14,
      invested: 1234
    },{
      id: 15,
      invested: 165
    },{
      id: 16,
      invested: 13444
    },{
      id: 17,
      invested: 1564
    },{
      id: 18,
      invested: 1324
    },{
      id: 19,
      invested: 9
    },{
      id: 20,
      invested: 1
    },{
      id: 21,
      invested: 13333
    },{
      id: 22,
      invested: 1654
    },
    {
      id: 23,
      invested: 1245
    },
    {
      id: 24,
      invested: 133
    },{
      id: 25,
      invested: 18766
    },{
      id: 26,
      invested: 1435
    },{
      id: 27,
      invested: 18654
    },{
      id: 28,
      invested: 1400
    },
    {
      id: 29,
      invested: 12
    },{
      id: 30,
      invested: 1
    },
    {
      id: 31,
      invested: 1567
    },
    {
      id: 32,
      invested: 2876
    },
    {
      id: 1,
      invested: 1
    },
    {
      id: 2,
      invested: 2765
    },
    {
      id: 3,
      invested: 58
    },
    {
      id: 4,
      invested: 9875
    },
    {
      id: 5,
      invested: 23223
    },
    {
      id: 6,
      invested: 987
    },
    {
      id: 7,
      invested: 12
    },
    {
      id: 8,
      invested: 1999
    },
    {
      id: 9,
      invested: 1445
    },
    {
      id: 10,
      invested: 178
    },{
      id: 11,
      invested: 1987
    },{
      id: 12,
      invested: 134
    },{
      id: 13,
      invested: 1
    },{
      id: 14,
      invested: 1234
    },{
      id: 15,
      invested: 165
    },{
      id: 16,
      invested: 13444
    },{
      id: 17,
      invested: 1564
    },{
      id: 18,
      invested: 1324
    },{
      id: 19,
      invested: 9
    },{
      id: 20,
      invested: 1
    },{
      id: 21,
      invested: 13333
    },{
      id: 22,
      invested: 1654
    },
    {
      id: 23,
      invested: 1245
    },
    {
      id: 24,
      invested: 133
    },{
      id: 25,
      invested: 18766
    },{
      id: 26,
      invested: 1435
    },{
      id: 27,
      invested: 18654
    },{
      id: 28,
      invested: 1400
    },
    {
      id: 29,
      invested: 12
    },{
      id: 30,
      invested: 1
    },
    {
      id: 31,
      invested: 1567
    },
    {
      id: 32,
      invested: 2876
    },
   
   
    
  ],
  stages: [
    {
      id: 1,
      name: 'Phase 1',
      endDate: '2022-08-14',
      isCompleted: true,
      active: false,
      duration: '3 months',
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
      name: 'Phase 2',
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
      endDate: '2022-10-14',
      isCompleted: false,
      active: true,
      duration: '7 months',
    },
    {
      id: 3,
      name: 'Phase 3',
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
      duration: '3 months',
    },
    {
      id: 4,
      name: 'Phase 4',
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
      duration: '3 months',
    },
    {
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },
    {
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    },{
      id: 5,
      name: 'Phase 5',
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
      duration: '3 months',
    }]
};

export default project;
