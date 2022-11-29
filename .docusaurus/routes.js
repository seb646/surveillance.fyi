import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f0b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '947'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ac5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ebb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '852'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd75'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '8c3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '96c'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e44'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/defining-surveillance',
        component: ComponentCreator('/defining-surveillance', 'f22'),
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
