import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/IconButton'),
  'mui.m.icon.button',
  {},
);
