import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/DialogActions'),
  'mui.m.dialog.actions',
  {},
);
