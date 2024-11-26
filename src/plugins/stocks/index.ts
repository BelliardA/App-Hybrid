import { registerPlugin } from '@capacitor/core';

import type { CreaPlugin } from './definitions';

const Crea = registerPlugin<CreaPlugin>('Crea', {
  web: () => import('./web').then((m) => new m.CreaWeb()),
});

export * from './definitions';
export { Crea };
