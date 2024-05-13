import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.snackbar.content', () => import('./SnackbarContent'));
