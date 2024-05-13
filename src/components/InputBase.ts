import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/InputBase'),
  'mui.m.input.base',
  {},
);
