import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Radio'),
  'mui.m.radio',
  {},
);
