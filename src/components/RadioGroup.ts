import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/RadioGroup'),
  'mui.m.radio.group',
  {},
);
