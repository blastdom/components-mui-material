import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TableFooter'),
  'mui.m.table.footer',
  {},
);
