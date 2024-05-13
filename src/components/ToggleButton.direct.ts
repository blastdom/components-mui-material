import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.toggle.button', () => import('./ToggleButton'));
