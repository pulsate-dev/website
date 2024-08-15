import { Callout } from 'nextra/components';

type Lang = 'ja' | 'en';

export default function NoTransCallout({ lang }: { lang: Lang }) {
  let msg: string;

  switch (lang) {
    case 'ja':
      msg =
        'このページは未翻訳です. もしこの言語に精通している場合はぜひ翻訳にご協力ください.';
      break;
    case 'en':
      msg =
        'This page is untranslated. If you are familiar with this language, please help us translate it.';
      break;
  }

  return (
    <Callout type="warning" emoji="🌐">
      {msg}
    </Callout>
  );
}
