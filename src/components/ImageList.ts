import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/ImageList'),
  'mui.m.image.list',
  {},
);
