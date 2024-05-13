import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Skeleton'),
  'mui.m.skeleton',
  {},
);
