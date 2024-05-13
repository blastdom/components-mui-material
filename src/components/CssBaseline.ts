import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/CssBaseline'),
  'mui.m.css.baseline',
  {},
);
