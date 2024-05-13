import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/FormHelperText'),
  'mui.m.form.helper.text',
  {},
);
