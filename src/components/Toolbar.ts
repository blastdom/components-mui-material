import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Toolbar'),
  'mui.m.toolbar',
  {},
);
