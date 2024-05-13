import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/InputLabel'),
  'mui.m.input.label',
  {},
);
