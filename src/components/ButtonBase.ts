import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ButtonBase'),
  'mui.m.button.base',
  {},
);
