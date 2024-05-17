import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const cyberVulnsPlugin = createPlugin({
  id: 'cyber-vulns',
  routes: {
    root: rootRouteRef,
  },
});

export const CyberVulnsPage = cyberVulnsPlugin.provide(
  createRoutableExtension({
    name: 'CyberVulnsPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
