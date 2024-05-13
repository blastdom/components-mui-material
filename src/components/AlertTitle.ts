import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/AlertTitle'),
  'mui.m.alert.title',
  {},
);
