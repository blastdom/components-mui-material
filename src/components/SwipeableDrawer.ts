import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/SwipeableDrawer'),
  'mui.m.swipeable.drawer',
  {},
);
