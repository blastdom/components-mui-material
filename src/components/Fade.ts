import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Fade'),
  'mui.m.fade',
  {},
);
