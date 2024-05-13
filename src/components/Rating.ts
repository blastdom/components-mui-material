import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Rating'),
  'mui.m.rating',
  {},
);
