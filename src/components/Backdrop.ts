import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Backdrop'),
  'mui.m.backdrop',
  {},
);
