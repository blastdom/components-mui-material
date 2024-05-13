import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Popover'),
  'mui.m.popover',
  {},
);
