import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Checkbox'),
  'mui.m.checkbox',
  {},
);
