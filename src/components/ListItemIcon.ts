import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ListItemIcon'),
  'mui.m.list.item.icon',
  {},
);
