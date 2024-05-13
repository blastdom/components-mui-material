import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Avatar'),
  'mui.m.avatar',
  {},
);
