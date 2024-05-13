import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Tab'),
  'mui.m.tab',
  {},
);
