import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Modal'),
  'mui.m.modal',
  {},
);
