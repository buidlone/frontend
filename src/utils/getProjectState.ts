export const getProjectState = (projectState: number | undefined) => {
  switch (projectState) {
    case 1:
      return "Project was canceled by the creator before the fundraiser started";

    case 2:
      return "Fundraiser has not started";

    case 4:
      return "Fundraiser is active";

    case 8:
      return "Fundraiser failed to raise soft cap";

    case 16:
      return "Fundraiser ended successfully, waiting for the 1st milestone to start";

    case 32 || 64:
      return "Milestone is ongoing";

    case 128:
      return "Project was terminated by voting";
    case 256:
      return "Project was terminated by gelato";

    case 512:
      return "Project successfully ended";
    case 1024:
      return "Project state is unknown";

    default:
      return "Error occured while retrieving project state";
  }
};
