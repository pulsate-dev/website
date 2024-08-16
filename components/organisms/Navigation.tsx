import { Fragment } from 'react';

interface NavigationProps {
  key: string;
  href: string;
}

const NavigationItems: NavigationProps[] = [
  // FIXME: Uncomment this line to add a link to the Getting Started page
  // { key: 'Getting Started', href: '/docs/user/getting-started' },
  { key: 'Introduction', href: '/docs/about' },
  { key: 'Release Note', href: '/release-note' },
  { key: 'GitHub ↗', href: 'https://github.com/pulsate-dev/pulsate' },
  {
    key: 'Roadmap ↗',
    href: '/roadmap',
  },
];

export default function Navigation() {
  return (
    <nav>
      {NavigationItems.map((item, index) => (
        <Fragment key={item.key}>
          <a href={item.href}>{item.key}</a>
          {index < NavigationItems.length - 1 && ' ・ '}
        </Fragment>
      ))}
    </nav>
  );
}
