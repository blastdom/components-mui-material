import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/CircularProgress'),
  'mui.m.circular.progress',
  {},
);
