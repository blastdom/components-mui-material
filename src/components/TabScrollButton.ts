import { createLazyBDomComponent } from 'blastdom';

export default createLazyBDomComponent(
  () => import('@mui/material/TabScrollButton'),
  'mui.m.tab.scroll.button',
  {},
);
