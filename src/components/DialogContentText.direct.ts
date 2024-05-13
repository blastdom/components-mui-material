import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.dialog.content.text', () => import('./DialogContentText'));
