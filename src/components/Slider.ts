import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Slider'),
  'mui.m.slider',
  {},
);
