import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/AccordionActions'),
  'mui.m.accordion.actions',
  {},
);
