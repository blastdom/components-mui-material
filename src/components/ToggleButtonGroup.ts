import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ToggleButtonGroup'),
  'mui.m.toggle.button.group',
  {},
);
