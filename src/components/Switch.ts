import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Switch'),
  'mui.m.switch',
  {},
);
