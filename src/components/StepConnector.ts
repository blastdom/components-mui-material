import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/StepConnector'),
  'mui.m.step.connector',
  {},
);
