import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ListItemButton'),
  'mui.m.list.item.button',
  {},
);
