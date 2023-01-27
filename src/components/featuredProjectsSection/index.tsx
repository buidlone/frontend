import React from "react";
import FeaturedProject from "../featuredProject";
import MobileFooter from "../mobileFooter";
import {
  FeatureTextWrapper,
  FeatureTitle,
  FeaturesSec,
  FeaturedProjectsSectionContainer,
} from "./styled";

export const featuredProjects = [
  {
    name: "Buidl1",
  },
  {
    name: "?",
  },
];

export default function FeaturedrojectsSection() {
  return (
    <FeaturedProjectsSectionContainer>
      <FeatureTextWrapper>
        <FeatureTitle>Featured projects</FeatureTitle>
      </FeatureTextWrapper>
      <FeaturesSec>
        {featuredProjects.map((el, index) => (
          <React.Fragment key={index + el.name}>
            <FeaturedProject key={index + el.name} project={el.name} />
            {el.name === "?" && <MobileFooter />}
          </React.Fragment>
        ))}
      </FeaturesSec>
    </FeaturedProjectsSectionContainer>
  );
}
