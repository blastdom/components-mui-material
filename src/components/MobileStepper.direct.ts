import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.mobile.stepper', () => import('./MobileStepper'));
