import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Hidden'),
  'mui.m.hidden',
  {},
);
