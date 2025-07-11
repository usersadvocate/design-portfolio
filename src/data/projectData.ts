import bom from './projects/bom';
import discovery from './projects/discovery';
import plego from './projects/plego';
import { Project } from '../types/project';

const projectData: Record<string, Project> = {
  bom,
  discovery,
  plego,
};

export default projectData;