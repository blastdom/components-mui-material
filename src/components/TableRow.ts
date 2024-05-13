import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TableRow'),
  'mui.m.table.row',
  {},
);
