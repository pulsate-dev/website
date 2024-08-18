import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

/**
 * This is a React component that renders the Pulsate API reference.
 * It uses the `ApiReferenceReact` component from the `@scalar/api-reference-react` package.
 *
 * Nextra cannot properly read TSX files configured as pages, so what should be used as pages are component and imported into MDX.
 * A warning message by autoprefixer is displayed, but since it is not an error, it is ignored here.
 *
 * @return The API reference component.
 */
export default function ScalarAPIReference() {
  // https://github.com/scalar/scalar/blob/main/documentation/configuration.md
  return (
    <ApiReferenceReact
      configuration={{
        isEditable: false,
        darkMode: true,
        hideDarkModeToggle: true,
        searchHotKey: 's',
        theme: 'bluePlanet',
        // TODO: Support testing the API reference with a staring server
        spec: {
          url: 'https://raw.githubusercontent.com/pulsate-dev/pulsate/main/resources/schema.json',
        },
      }}
    />
  );
}
