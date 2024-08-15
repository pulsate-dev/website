import { Fragment } from 'react';

interface NavigationProps {
  key: string;
  href: string;
}

const NavigationItems: NavigationProps[] = [
  { key: 'Getting Started', href: '/getting-started' },
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
