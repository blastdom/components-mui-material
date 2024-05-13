import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ScopedCssBaseline'),
  'mui.m.scoped.css.baseline',
  {},
);
