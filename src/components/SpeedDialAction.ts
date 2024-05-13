import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/SpeedDialAction'),
  'mui.m.speed.dial.action',
  {},
);
