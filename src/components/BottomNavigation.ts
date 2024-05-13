import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/BottomNavigation'),
  'mui.m.bottom.navigation',
  {},
);
