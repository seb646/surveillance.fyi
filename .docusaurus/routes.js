import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/surveillance.fyi/__docusaurus/debug',
    component: ComponentCreator('/surveillance.fyi/__docusaurus/debug', 'db6'),
    exact: true
  },
  {
    path: '/surveillance.fyi/__docusaurus/debug/config',
    component: ComponentCreator('/surveillance.fyi/__docusaurus/debug/config', 'e28'),
    exact: true
  },
  {
    path: '/surveillance.fyi/__docusaurus/debug/content',
    component: ComponentCreator('/surveillance.fyi/__docusaurus/debug/content', '7ba'),
    exact: true
  },
  {
    path: '/surveillance.fyi/__docusaurus/debug/globalData',
    component: ComponentCreator('/surveillance.fyi/__docusaurus/debug/globalData', 'fd6'),
    exact: true
  },
  {
    path: '/surveillance.fyi/__docusaurus/debug/metadata',
    component: ComponentCreator('/surveillance.fyi/__docusaurus/debug/metadata', '1c9'),
    exact: true
  },
  {
    path: '/surveillance.fyi/__docusaurus/debug/registry',
    component: ComponentCreator('/surveillance.fyi/__docusaurus/debug/registry', 'ae8'),
    exact: true
  },
  {
    path: '/surveillance.fyi/__docusaurus/debug/routes',
    component: ComponentCreator('/surveillance.fyi/__docusaurus/debug/routes', '930'),
    exact: true
  },
  {
    path: '/surveillance.fyi/markdown-page',
    component: ComponentCreator('/surveillance.fyi/markdown-page', '849'),
    exact: true
  },
  {
    path: '/surveillance.fyi/',
    component: ComponentCreator('/surveillance.fyi/', 'c4a'),
    routes: [
      {
        path: '/surveillance.fyi/',
        component: ComponentCreator('/surveillance.fyi/', '2a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/category/programmatic-surveillance',
        component: ComponentCreator('/surveillance.fyi/category/programmatic-surveillance', '9fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/educational-surveillance',
        component: ComponentCreator('/surveillance.fyi/educational-surveillance', '995'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/health-surveillance',
        component: ComponentCreator('/surveillance.fyi/health-surveillance', '752'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/preface',
        component: ComponentCreator('/surveillance.fyi/preface', 'd8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/programmatic-surveillance/criminal-surveillance',
        component: ComponentCreator('/surveillance.fyi/programmatic-surveillance/criminal-surveillance', 'dad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/programmatic-surveillance/intelligence-surveillance-reconnaissance',
        component: ComponentCreator('/surveillance.fyi/programmatic-surveillance/intelligence-surveillance-reconnaissance', 'cbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/programmatic-surveillance/mass-surveillance',
        component: ComponentCreator('/surveillance.fyi/programmatic-surveillance/mass-surveillance', '761'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/programmatic-surveillance/protective-surveillance',
        component: ComponentCreator('/surveillance.fyi/programmatic-surveillance/protective-surveillance', 'aa9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/sousveillance',
        component: ComponentCreator('/surveillance.fyi/sousveillance', 'bf7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/surveillance-capitalism',
        component: ComponentCreator('/surveillance.fyi/surveillance-capitalism', '990'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/surveillance.fyi/workplace-surveillance',
        component: ComponentCreator('/surveillance.fyi/workplace-surveillance', 'e4a'),
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
