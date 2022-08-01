import {
  FeatureTextWrapper,
  FeatureTitle,
  FeaturesSec,
  FeaturedProjectsBlockWrapper,
  ProjectName,
} from './styled';

export const featuredProjects = [
  {
    name: 'Buidl1',
  },
  {
    name: '...',
  },
  {
    name: '...',
  },
  {
    name: '...',
  },
  {
    name: '...',
  },
  {
    name: '...',
  },
];

export default function FeaturedrojectsSection() {
  return (
    <>
      <FeatureTextWrapper>
        <FeatureTitle>Featured projects</FeatureTitle>
      </FeatureTextWrapper>
      <FeaturesSec>
        {featuredProjects.map((el, index) => (
          <FeaturedProjectsBlockWrapper key={index}>
            <ProjectName>{el.name}</ProjectName>
          </FeaturedProjectsBlockWrapper>
        ))}
      </FeaturesSec>
    </>
  );
}
