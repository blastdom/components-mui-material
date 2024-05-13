import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.list.item.button', () => import('./ListItemButton'));
