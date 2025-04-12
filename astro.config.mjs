import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";
import starlightOpenAPIPlugin, {openAPISidebarGroups} from "starlight-openapi";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Pulsate',
    description: 'Website and Documentation for Pulsate',
    lastUpdated: true,
    pagination: true,
    favicon: './src/assets/logo.png',
    customCss: [
      './src/content/styles/global.css',
    ],
    locales: {
      root: {
        label: '日本語',
        lang: 'ja'
      },
      en: {
        label: 'English'
      }
    },
    logo: {
      src: './src/assets/logo.png',
      replacesTitle: true
    },
    editLink: {
      baseUrl: 'https://github.com/pulsate-dev/docs/edit/main/'
    },
    social: [
      { icon: 'discord', label: 'Discord', href: 'https://link.pulsate.dev/discord' },
      { icon: 'github', label: 'GitHub', href: 'https://github.com/pulsate-dev/pulsate' },
    ],
    plugins: [
        starlightOpenAPIPlugin([
          {
            base: 'api-reference',
            label: 'API Reference',
            // TODO: `main` からタグに切り替える
            schema: 'https://raw.githubusercontent.com/pulsate-dev/pulsate/main/resources/schema.json'
          },
        ]),
    ],
    sidebar: [
      {
        label: 'スタートガイド',
        translations: {
          en: 'Start Guide'
        },
        items: [
          'beginner/what-is-pulsate',
          'beginner/getting-started',
        ]
      },
      {
        label: 'ユーザーガイド',
        translations: {
          en: 'User Guide'
        },
        items: [
          'user/post'
        ]
      },
      {
        label: 'コミュニティ',
        translations: {
          en: 'Community'
        },
        items: [
          'community/sponsor',
        ]
      },
        ...openAPISidebarGroups
    ]
  }), react()]
});
