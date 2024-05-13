import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/MenuItem'),
  'mui.m.menu.item',
  {},
);
