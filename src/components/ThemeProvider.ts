import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/styles/ThemeProvider'),
  'mui.m.theme.provider',
  {},
);
