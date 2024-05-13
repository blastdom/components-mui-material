import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.avatar.group', () => import('./AvatarGroup'));
