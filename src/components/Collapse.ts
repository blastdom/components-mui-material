import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Collapse'),
  'mui.m.collapse',
  {},
);
