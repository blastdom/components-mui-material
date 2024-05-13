import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/SpeedDial'),
  'mui.m.speed.dial',
  {},
);
