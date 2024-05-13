import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Typography'),
  'mui.m.typography',
  {},
);
