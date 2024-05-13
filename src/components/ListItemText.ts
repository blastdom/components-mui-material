import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ListItemText'),
  'mui.m.list.item.text',
  {},
);
