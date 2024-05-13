import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.linear.progress', () => import('./LinearProgress'));
