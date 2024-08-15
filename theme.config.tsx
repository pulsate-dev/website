import Image from 'next/image';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';

const repositoryURL = 'https://github.com/pulsate-dev/docs';

const themeConfig: DocsThemeConfig = {
  docsRepositoryBase: `${repositoryURL}/edit/main/`,
  darkMode: true,
  chat: {
    link: 'https://link.pulsate.dev/discord'
  },
  i18n: [
    { locale: 'ja', text: '日本語' },
    { locale: 'en', text: 'English' }
  ],
  editLink: {
    text: 'Edit this page'
  },
  project: {
    link: 'https://github.com/pulsate-dev/pulsate'
  },
  footer: {
    text: <span>© {new Date().getFullYear()} Pulsate</span>
  },
  toc: {
    backToTop: true
  },
  search: {
    placeholder: 'Search pulsate.dev'
  },
  feedback: {
    content: 'Create a Issue',
    useLink() {
      return `${repositoryURL}/issues/new`;
    }
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Pulsate Docs'
      };
    } else {
      return {
        titleTemplate: 'Pulsate Docs'
      };
    }
  }
};

export default themeConfig;
