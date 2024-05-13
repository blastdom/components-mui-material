import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ImageListItem'),
  'mui.m.image.list.item',
  {},
);
