import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/FormGroup'),
  'mui.m.form.group',
  {},
);
