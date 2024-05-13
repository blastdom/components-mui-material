import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/OutlinedInput'),
  'mui.m.outlined.input',
  {},
);
