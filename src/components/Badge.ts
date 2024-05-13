import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Badge'),
  'mui.m.badge',
  {},
);
