import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/InputAdornment'),
  'mui.m.input.adornment',
  {},
);
