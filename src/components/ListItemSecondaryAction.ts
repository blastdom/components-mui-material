import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ListItemSecondaryAction'),
  'mui.m.list.item.secondary.action',
  {},
);
