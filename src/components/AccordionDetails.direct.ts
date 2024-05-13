import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.accordion.details', () => import('./AccordionDetails'));
