import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/MobileStepper'),
  'mui.m.mobile.stepper',
  {},
);
