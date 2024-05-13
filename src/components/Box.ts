import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Box') as never,
  'mui.m.box',
  {},
);
