import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.dialog.actions', () => import('./DialogActions'));
