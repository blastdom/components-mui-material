import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.theme.provider', () => import('./ThemeProvider'));
