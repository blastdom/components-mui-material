import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Tabs'),
  'mui.m.tabs',
  {},
);
