import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Grow'),
  'mui.m.grow',
  {},
);
