import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Menu'),
  'mui.m.menu',
  {},
);
