import bom from './projects/bom';
import discovery from './projects/discovery';
import plego from './projects/plego';
import onboarding from './projects/onboarding';
import { Project } from '../types/project';

const projectData: Record<string, Project> = {
  onboarding,
  bom,
  discovery,
  plego,
};

export default projectData;