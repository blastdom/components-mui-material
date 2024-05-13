import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.pagination.item', () => import('./PaginationItem'));
