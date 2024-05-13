import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/StepButton'),
  'mui.m.step.button',
  {},
);
