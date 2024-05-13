import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/SnackbarContent'),
  'mui.m.snackbar.content',
  {},
);
