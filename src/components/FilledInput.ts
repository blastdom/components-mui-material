import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/FilledInput'),
  'mui.m.filled.input',
  {},
);
