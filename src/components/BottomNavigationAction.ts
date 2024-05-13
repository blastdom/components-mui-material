import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/BottomNavigationAction'),
  'mui.m.bottom.navigation.action',
  {},
);
