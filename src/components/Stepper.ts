import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Stepper'),
  'mui.m.stepper',
  {},
);
