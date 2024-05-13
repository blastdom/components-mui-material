import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Tooltip'),
  'mui.m.tooltip',
  {},
);
