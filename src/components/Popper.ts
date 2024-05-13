import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Popper'),
  'mui.m.popper',
  {},
);
