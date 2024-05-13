import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.css.baseline', () => import('./CssBaseline'));
