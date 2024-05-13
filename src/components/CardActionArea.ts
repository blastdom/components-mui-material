import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/CardActionArea'),
  'mui.m.card.action.area',
  {},
);
