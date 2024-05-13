import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.svg.icon', () => import('./SvgIcon'));
