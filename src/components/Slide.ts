import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Slide'),
  'mui.m.slide',
  {},
);
