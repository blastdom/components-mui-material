import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/Pagination'),
  'mui.m.pagination',
  {},
);
