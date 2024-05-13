import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Accordion'),
  'mui.m.accordion',
  {},
);
