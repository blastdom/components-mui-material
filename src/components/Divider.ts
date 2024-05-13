import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Divider'),
  'mui.m.divider',
  {},
);
