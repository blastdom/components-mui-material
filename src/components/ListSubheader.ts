import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ListSubheader'),
  'mui.m.list.subheader',
  {},
);
