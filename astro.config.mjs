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
    pagination: false,
    favicon: './src/assets/logo.png',
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
    social: {
      discord: 'https://link.pulsate.dev/discord',
      github: 'https://github.com/pulsate-dev/pulsate',
    },
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
