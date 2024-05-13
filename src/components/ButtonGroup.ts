import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ButtonGroup'),
  'mui.m.button.group',
  {},
);
