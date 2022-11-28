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
    component: ComponentCreator('/', '07d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/programmatic-surveillance',
        component: ComponentCreator('/category/programmatic-surveillance', '06c'),
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
        path: '/preface',
        component: ComponentCreator('/preface', '7c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/programmatic-surveillance/criminal-surveillance',
        component: ComponentCreator('/programmatic-surveillance/criminal-surveillance', '69a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/programmatic-surveillance/intelligence-surveillance-reconnaissance',
        component: ComponentCreator('/programmatic-surveillance/intelligence-surveillance-reconnaissance', '574'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/programmatic-surveillance/mass-surveillance',
        component: ComponentCreator('/programmatic-surveillance/mass-surveillance', 'e27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/programmatic-surveillance/protective-surveillance',
        component: ComponentCreator('/programmatic-surveillance/protective-surveillance', 'b34'),
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
