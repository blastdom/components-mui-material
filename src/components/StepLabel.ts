import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/StepLabel'),
  'mui.m.step.label',
  {},
);
