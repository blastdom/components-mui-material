import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.breadcrumbs', () => import('./Breadcrumbs'));
