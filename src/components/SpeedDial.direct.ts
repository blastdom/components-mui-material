import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.speed.dial', () => import('./SpeedDial'));
