import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/AppBar'),
  'mui.m.app.bar',
  {},
);
