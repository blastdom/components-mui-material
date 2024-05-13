import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TableContainer'),
  'mui.m.table.container',
  {},
);
