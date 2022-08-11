import { createContext, useState } from 'react';

interface props {
  children: React.ReactNode;
}

interface IFeaturedProject {
  raised?: number;
  milestones?: number;
  milestonesCompleted?: number;
  participants?: number;
  funds?: number;
  fundsReleased?: number;
  tokensReserved?: number;
  end?: string;

  project?: string;
  invested?: number;
  collected?: number;
  claimed?: number;
  reserved?: number;
  state?: string;
}

const ProjectContext = createContext<IFeaturedProject | undefined>(undefined);

export function ProjectContextProdvider({ children }: props) {
  const [featuredProject, setFeaturedProject] = useState<IFeaturedProject>({
    raised: 1245,
    milestones: 32,
    milestonesCompleted: 12,
    participants: 234,
    funds: 324234,
    fundsReleased: 23452,
    tokensReserved: 4000000,
    end: '2022-09-09',

    project: 'Buidl1',
    invested: 1245,
    collected: 125,
    claimed: 65,
    reserved: 6585,
    state: 'Ongoing',
  });

  return (
    <ProjectContext.Provider value={featuredProject}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
