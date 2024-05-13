import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ListItem'),
  'mui.m.list.item',
  {},
);
