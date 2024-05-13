import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/GlobalStyles'),
  'mui.m.global.styles',
  {},
);
