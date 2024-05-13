import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/SpeedDialIcon'),
  'mui.m.speed.dial.icon',
  {},
);
