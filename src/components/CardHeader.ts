import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/CardHeader'),
  'mui.m.card.header',
  {},
);
