import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Paper'),
  'mui.m.paper',
  {},
);
