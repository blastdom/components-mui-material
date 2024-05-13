import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ToggleButton'),
  'mui.m.toggle.button',
  {},
);
