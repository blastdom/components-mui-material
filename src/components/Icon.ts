import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Icon'),
  'mui.m.icon',
  {},
);
