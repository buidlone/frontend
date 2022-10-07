import { useContext } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import {
  StateTextBlue,
  StateTextGreen,
  StateTextOrange,
  StateTextYellow,
} from "./styled";

const ProjectState = () => {
  const { projectState } = useContext(LoadedValuesContext);

  if ([4, 16, 32, 64].includes(projectState)) {
    return <StateTextGreen>Ongoing</StateTextGreen>;
  } else if ([1, 8].includes(projectState)) {
    return <StateTextBlue>Canceled</StateTextBlue>;
  } else if (projectState === 2) {
    return <StateTextYellow>Not started</StateTextYellow>;
  } else if (projectState === 128) {
    return <StateTextOrange>Terminated</StateTextOrange>;
  } else if (projectState === 256) {
    return <StateTextBlue>Ended</StateTextBlue>;
  } else if (projectState === 512) {
    return <>¯\_(ツ)_/¯</>; // TODO: decide what is shown to user when status is unknown
  } else {
    return <></>;
  }
};

export default ProjectState;
