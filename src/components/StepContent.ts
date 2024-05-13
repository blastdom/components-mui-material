import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/StepContent'),
  'mui.m.step.content',
  {},
);
