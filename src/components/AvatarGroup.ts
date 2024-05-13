import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/AvatarGroup'),
  'mui.m.avatar.group',
  {},
);
