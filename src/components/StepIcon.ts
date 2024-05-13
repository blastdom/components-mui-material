import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/StepIcon'),
  'mui.m.step.icon',
  {},
);
