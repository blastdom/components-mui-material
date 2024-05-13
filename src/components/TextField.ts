import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TextField'),
  'mui.m.text.field',
  {},
);
