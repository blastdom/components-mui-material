import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.bottom.navigation', () => import('./BottomNavigation'));
