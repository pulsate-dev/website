import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";
import starlightOpenAPIPlugin, {openAPISidebarGroups} from "starlight-openapi";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Pulsate Docs',
    description: 'Documentation for Pulsate',
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
      src: './src/assets/logo.png'
    },
    editLink: {
      baseUrl: 'https://github.com/pulsate-dev/docs/edit/main/'
    },
    social: {
      discord: 'https://link.pulsate.dev/discord',
      github: 'https://github.com/withastro/starlight',
      twitter: 'https://link.pulsate.dev/x',
      youtube: 'https://link.pulsate.dev/youtube'
    },
    plugins: [
        starlightOpenAPIPlugin([
          {
            base: 'api-reference',
            label: 'API Reference',
            schema: 'https://raw.githubusercontent.com/pulsate-dev/pulsate/main/resources/schema.json'
          },
        ]),
    ],
    sidebar: [
      {
        label: 'リリースノート',
        translations: {
          en: 'Release Note'
        },
        link: '/release-note'
      },
        ...openAPISidebarGroups
    ]
  }), react()]
});
