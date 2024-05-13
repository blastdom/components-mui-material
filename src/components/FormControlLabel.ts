import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/FormControlLabel'),
  'mui.m.form.control.label',
  {},
);
