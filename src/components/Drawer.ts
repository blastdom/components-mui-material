import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Drawer'),
  'mui.m.drawer',
  {},
);
