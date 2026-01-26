# Translation Files Structure

This directory contains translation files organized by namespace for better maintainability and scalability.

## Structure

```
locales/
├── common/          # Shared translations used across multiple pages/components
│   ├── en.json
│   ├── es.json
│   └── fr.json
├── home/            # Translations specific to the home page
│   ├── en.json
│   ├── es.json
│   └── fr.json
└── components/      # Translations for reusable components
    ├── en.json
    ├── es.json
    └── fr.json
```

## Usage

### In Components

Use the `useTranslation` hook with a namespace parameter:

```tsx
import { useTranslation } from '@/hooks/useTranslation';

export default function MyComponent() {
  // Use translations from the 'home' namespace
  const { t } = useTranslation('home');
  
  return <h1>{t('welcome')}</h1>;
}
```

### Multiple Namespaces

You can use multiple namespaces in the same component:

```tsx
export default function MyComponent() {
  const { t } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button>{tCommon('changeLanguage')}</button>
    </div>
  );
}
```

## Adding New Namespaces

1. Create a new directory under `locales/` with your namespace name
2. Add translation files for each locale (en.json, es.json, fr.json)
3. Update the `TranslationProvider` in `app/layout.tsx` to preload the new namespace:

```tsx
<TranslationProvider namespaces={['common', 'home', 'your-new-namespace']}>
```

## Example Translation File

```json
{
  "welcome": "Welcome to Fako Dallas",
  "description": "A starter template",
  "nested": {
    "key": "Nested translation value"
  }
}
```

## Nested Keys

You can use dot notation to access nested translation keys:

```tsx
{t('nested.key')} // Returns "Nested translation value"
```

## Benefits of Namespace-Based Translations

- **Better Organization**: Each page/component has its own translation file
- **Scalability**: Easier to manage translations as the app grows
- **Code Splitting**: Only load translations needed for specific pages
- **Maintainability**: Changes to one page's translations don't affect others
- **Team Collaboration**: Multiple developers can work on different translation files without conflicts
