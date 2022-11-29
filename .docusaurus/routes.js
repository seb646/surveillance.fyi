import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '96c'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '8e6'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/educational-surveillance',
        component: ComponentCreator('/educational-surveillance', 'b9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/health-surveillance',
        component: ComponentCreator('/health-surveillance', '7fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luxury-surveillance',
        component: ComponentCreator('/luxury-surveillance', 'f62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/mass-surveillance',
        component: ComponentCreator('/mass-surveillance', '3a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/resources',
        component: ComponentCreator('/resources', '70f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sousveillance',
        component: ComponentCreator('/sousveillance', '0b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance-capitalism',
        component: ComponentCreator('/surveillance-capitalism', '98f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/workplace-surveillance',
        component: ComponentCreator('/workplace-surveillance', '445'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
