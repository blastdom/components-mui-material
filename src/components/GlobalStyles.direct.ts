import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.global.styles', () => import('./GlobalStyles'));
