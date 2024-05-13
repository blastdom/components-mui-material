import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Breadcrumbs'),
  'mui.m.breadcrumbs',
  {},
);
