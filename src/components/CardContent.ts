import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/CardContent'),
  'mui.m.card.content',
  {},
);
