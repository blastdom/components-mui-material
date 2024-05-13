import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/AccordionSummary'),
  'mui.m.accordion.summary',
  {},
);
