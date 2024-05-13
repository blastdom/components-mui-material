import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.swipeable.drawer', () => import('./SwipeableDrawer'));
