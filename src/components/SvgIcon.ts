import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/SvgIcon'),
  'mui.m.svg.icon',
  {},
);
