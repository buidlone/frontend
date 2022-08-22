import { createContext, useState } from 'react';
import project from './data';

interface Props {
  children: React.ReactNode;
}

const ProjectContext = createContext(project);

export function ProjectContextProdvider({ children }: Props) {
  const [featuredProject, setFeaturedProject] = useState(project);

  return (
    <ProjectContext.Provider value={featuredProject}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
