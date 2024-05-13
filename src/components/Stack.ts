import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Stack'),
  'mui.m.stack',
  {},
);
