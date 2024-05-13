import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TableHead'),
  'mui.m.table.head',
  {},
);
