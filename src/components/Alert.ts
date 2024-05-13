import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Alert'),
  'mui.m.alert',
  {},
);
