import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Analyst\'s lounge',
  tagline: 'Write hard',
  favicon: 'img/favicon.ico',
  url: 'https://iwizy.github.io',
  baseUrl: '/',
  organizationName: 'iwizy',
  projectName: 'iwizy.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-LFH8L1K468',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'requirements',
        path: 'requirements',
        routeBasePath: 'requirements',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'database',
        path: 'database',
        routeBasePath: 'database',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'integrations',
        path: 'integrations',
        routeBasePath: 'integrations',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'notations',
        path: 'notations',
        routeBasePath: 'notations',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algorythm',
        path: 'algorythm',
        routeBasePath: 'algorythm',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'architecture',
        path: 'architecture',
        routeBasePath: 'architecture',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'development',
        path: 'development',
        routeBasePath: 'development',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'metodologies',
        path: 'metodologies',
        routeBasePath: 'metodologies',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tools',
        path: 'tools',
        routeBasePath: 'tools',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general-competencies',
        path: 'general-competencies',
        routeBasePath: 'general-competencies',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'related-skills',
        path: 'related-skills',
        routeBasePath: 'related-skills',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'soft-skills',
        path: 'soft-skills',
        routeBasePath: 'soft-skills',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Analyst\'s lounge',
        logo: {
          alt: 'Analyst\'s lounge',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'requirements', 
            label: 'Требования',
            position: 'left',
            activeBaseRegex: `/requirements`,
          },
          {
            to: 'database', 
            label: 'Базы данных',
            position: 'left',
            activeBaseRegex: `/database`,
          },
          {
            to: 'integrations', 
            label: 'Интеграции',
            position: 'left',
            activeBaseRegex: `/integrations`,
          },
          {
            to: 'notations', 
            label: 'Нотации',
            position: 'left',
            activeBaseRegex: `/notations`,
          },
          {
            to: 'algorythm', 
            label: 'Алгоритмы',
            position: 'left',
            activeBaseRegex: `/algorythm`,
          },
          {
            to: 'architecture', 
            label: 'Архитектура',
            position: 'left',
            activeBaseRegex: `/architecture`,
          },
          {
            to: 'development', 
            label: 'Разработка',
            position: 'left',
            activeBaseRegex: `/development`,
          },
          {
            to: 'metodologies', 
            label: 'Методологии',
            position: 'left',
            activeBaseRegex: `/metodologies`,
          },
          {
            to: 'tools', 
            label: 'Инструменты',
            position: 'left',
            activeBaseRegex: `/tools`,
          },
          {
            label: 'Другое',
            position: 'left',
            type: 'dropdown',
            items: [
              {
                to: 'general-competencies', 
                label: 'Общие компетенции',
                docId: 'general-competencies',
                activeBaseRegex: `/general-competencies`,
              },
              {
                to: 'related-skills', 
                label: 'Смежные навыки',
                docId: 'related-skills',
                activeBaseRegex: `/related-skills`,
              },
              {
                to: 'soft-skills', 
                label: 'Софт скилы',
                docId: 'soft-skills',
                activeBaseRegex: `/soft-skills`,
              },
            ],
          },          
          {
            href: 'https://github.com/iwizy/iwizy.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Analyst\'s lounge`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['json', 'java'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'AQJGALB388',
  
        // Public API key: it is safe to commit it
        apiKey: '36df146fb2be3e7351876e88ce2d16e7',
  
        indexName: 'iwizyio',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
    }),
};

export default config;
