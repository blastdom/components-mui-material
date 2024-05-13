import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/DialogContentText'),
  'mui.m.dialog.content.text',
  {},
);
