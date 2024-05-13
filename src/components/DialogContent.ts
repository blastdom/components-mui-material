import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/DialogContent'),
  'mui.m.dialog.content',
  {},
);
