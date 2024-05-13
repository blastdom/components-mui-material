import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/FormControl'),
  'mui.m.form.control',
  {},
);
