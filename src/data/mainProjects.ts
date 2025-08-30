import bom from "./projects/bomPortal";
import discovery from "./projects/continuousDiscovery";
import plego from "./projects/plegoDesignSystem";
import onboarding from "./projects/itOnboarding";
import { Project } from "../types/ProjectTypes";

const projectData: Record<string, Project> = {
  "it-onboarding": onboarding,
  "bom-portal": bom,
  "continuous-discovery": discovery,
  "plego-design-system": plego,
};

export default projectData;
