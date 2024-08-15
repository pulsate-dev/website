import localFont from 'next/font/local';

/*
 * "LINE Seed JP" licensed under the SIL Open Font License
 * https://seed.line.me/
 */
const lineSeed = localFont({
  src: [
    {
      path: '../public/assets/fonts/LINESeedJP_OTF_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={lineSeed.className}>
      <Component {...pageProps} />
    </main>
  );
}
