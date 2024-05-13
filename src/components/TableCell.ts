import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TableCell'),
  'mui.m.table.cell',
  {},
);
