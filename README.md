# Fako Dallas Website

A modern Next.js starter template with Tailwind CSS, React Context, and internationalization (i18n) support.

## Features

- ⚡ **Next.js 15** - Latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔄 **React Context** - State management for global app state
- 🌐 **i18n** - Multi-language support (English, Spanish, French)
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in dark mode support
- 🔧 **TypeScript** - Type-safe development

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fako-dallas/fako-dallas-website.git
cd fako-dallas-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fako-dallas-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with AppProvider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind
├── components/            # React components
│   └── LanguageSwitcher.tsx
├── context/               # React Context providers
│   └── AppContext.tsx     # App state management
├── hooks/                 # Custom React hooks
│   └── useTranslation.ts  # Translation hook
├── locales/               # Translation files
│   ├── en.json           # English translations
│   ├── es.json           # Spanish translations
│   └── fr.json           # French translations
├── utils/                 # Utility functions
│   └── translations.ts    # Translation utilities
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Using Context

The app uses React Context for state management. Access the context in any component:

```tsx
'use client';

import { useAppContext } from '@/context/AppContext';

export default function MyComponent() {
  const { locale, setLocale } = useAppContext();
  // Your component logic
}
```

## Using Translations

Use the `useTranslation` hook to access translations:

```tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('welcome')}</h1>;
}
```

### Adding New Translations

1. Add your translation keys to all locale files in `locales/`
2. Use the translation key with the `t()` function

Example:
```json
// locales/en.json
{
  "myNewKey": "My new translation"
}
```

```tsx
{t('myNewKey')}
```

## Adding New Languages

1. Create a new JSON file in `locales/` (e.g., `de.json`)
2. Add the language to `utils/translations.ts`:
```ts
import de from '@/locales/de.json';

const translations = {
  en,
  es,
  fr,
  de, // Add here
};

export const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' }, // Add here
];
```

## Customization

### Tailwind CSS

Customize Tailwind in `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
    },
  },
}
```

### Adding New Context State

Extend the AppContext in `context/AppContext.tsx`:
```tsx
interface AppContextType {
  locale: string;
  setLocale: (locale: string) => void;
  // Add your new state here
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production bundle:
```bash
npm run build
npm run start
```

## License

MIT

## Support

For support, open an issue on GitHub.