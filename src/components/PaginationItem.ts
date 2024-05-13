import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/PaginationItem'),
  'mui.m.pagination.item',
  {},
);
