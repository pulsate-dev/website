import Image from 'next/image';
import { useRouter } from 'next/router';
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs';

const repositoryURL = 'https://github.com/pulsate-dev/docs';

const themeConfig: DocsThemeConfig = {
  docsRepositoryBase: `${repositoryURL}/edit/main/`,
  darkMode: true,
  banner: {
    dismissible: true,
    key: 'first-published',
    text: (
      <a href="/docs/about">Hello Pulsate 👋: Introduction Pulsate →</a>
    )
  },
  chat: {
    link: 'https://link.pulsate.dev/discord'
  },
  i18n: [
    { locale: 'ja', text: 'Japanese' },
    { locale: 'en', text: 'English' }
  ],
  editLink: {
    text: 'Edit this page on GitHub',
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
  logo: (
    <>
      <Image src={'/logo.png'} alt={"Pulsate's logo"} width={40} height={40}/>
      <span style={{ marginLeft: '10px', fontWeight: 500 }}>Pulsate Docs</span>
    </>
  ),
  head: () => {
    const {asPath, defaultLocale, locale} = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://docs.pulsate.dev' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta charSet="utf-8"/>
        <meta name="description" content={frontMatter.description || 'Documentation for the Pulsate Project'}/>
        <meta name="og:title" content={frontMatter.title || 'Pulsate Docs'}/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="ja"/>
        <meta property="og:description" content={frontMatter.description || 'Documentation for the Pulsate Project'}/>
        <meta property="og:site_name" content={frontMatter.title || 'Pulsate Docs'}/>
        <meta property="og:url" content={url}/>
        <meta name="theme-color" content="#04CDFF"/>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest"/>
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </>
    )
  },
  useNextSeoProps() {
    const {asPath} = useRouter();
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
