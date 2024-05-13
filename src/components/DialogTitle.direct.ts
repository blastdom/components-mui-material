import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.dialog.title', () => import('./DialogTitle'));
