import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TableBody'),
  'mui.m.table.body',
  {},
);
