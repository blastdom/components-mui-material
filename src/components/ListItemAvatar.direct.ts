import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.list.item.avatar', () => import('./ListItemAvatar'));
