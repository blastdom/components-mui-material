import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.scoped.css.baseline', () => import('./ScopedCssBaseline'));
