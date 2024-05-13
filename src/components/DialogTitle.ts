import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/DialogTitle'),
  'mui.m.dialog.title',
  {},
);
