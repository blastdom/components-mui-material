import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/MenuList'),
  'mui.m.menu.list',
  {},
);
