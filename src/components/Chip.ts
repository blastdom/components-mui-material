import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Chip'),
  'mui.m.chip',
  {},
);
