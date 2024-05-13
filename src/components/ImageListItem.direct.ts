import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.image.list.item', () => import('./ImageListItem'));
