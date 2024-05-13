import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/CardMedia'),
  'mui.m.card.media',
  {},
);
