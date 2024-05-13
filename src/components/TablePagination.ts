import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TablePagination'),
  'mui.m.table.pagination',
  {},
);
