import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Zoom'),
  'mui.m.zoom',
  {},
);
