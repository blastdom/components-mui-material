import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ImageListItemBar'),
  'mui.m.image.list.item.bar',
  {},
);
