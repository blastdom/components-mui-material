import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/AccordionDetails'),
  'mui.m.accordion.details',
  {},
);
