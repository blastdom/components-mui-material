import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.accordion.actions', () => import('./AccordionActions'));
