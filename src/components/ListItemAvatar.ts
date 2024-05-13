import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ListItemAvatar'),
  'mui.m.list.item.avatar',
  {},
);
