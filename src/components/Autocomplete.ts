import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Autocomplete'),
  'mui.m.autocomplete',
  {},
);
