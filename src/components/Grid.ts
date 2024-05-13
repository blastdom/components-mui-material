import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Grid'),
  'mui.m.grid',
  {},
);
