import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.form.control.label', () => import('./FormControlLabel'));
