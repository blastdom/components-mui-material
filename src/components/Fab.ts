import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Fab'),
  'mui.m.fab',
  {},
);
