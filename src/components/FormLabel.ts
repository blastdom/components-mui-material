import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/FormLabel'),
  'mui.m.form.label',
  {},
);
