import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TableSortLabel'),
  'mui.m.table.sort.label',
  {},
);
