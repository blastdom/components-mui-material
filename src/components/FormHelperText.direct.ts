import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.form.helper.text', () => import('./FormHelperText'));
