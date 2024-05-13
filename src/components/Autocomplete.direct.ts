import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.autocomplete', () => import('./Autocomplete'));
