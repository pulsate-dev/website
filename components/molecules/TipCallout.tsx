import { Callout } from 'nextra/components';

export default function TipCallout({
  children,
}: { children: React.ReactNode }) {
  return (
    <Callout type="warning" emoji="💡">
      {children}
    </Callout>
  );
}
