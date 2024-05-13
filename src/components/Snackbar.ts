import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Snackbar'),
  'mui.m.snackbar',
  {},
);
