import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { cyberVulnsPlugin, CyberVulnsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(cyberVulnsPlugin)
  .addPage({
    element: <CyberVulnsPage />,
    title: 'Root Page',
    path: '/cyber-vulns',
  })
  .render();
