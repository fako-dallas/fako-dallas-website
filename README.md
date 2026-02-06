# Fako Dallas Website

A modern Next.js starter template with Tailwind CSS, React Context, and namespace-based internationalization (i18n) support.

## Features

- ⚡ **Next.js 15** - Latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔄 **React Context** - State management for global app state
- 🌐 **Namespace-based i18n** - Multi-language support with organized translation files (English, Spanish, French)
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
│   └── useTranslation.ts  # Translation hook with namespace support
├── locales/               # Translation files organized by namespace
│   ├── common/           # Shared translations
│   │   ├── en.json
│   │   ├── es.json
│   │   └── fr.json
│   ├── home/             # Home page translations
│   │   ├── en.json
│   │   ├── es.json
│   │   └── fr.json
│   └── README.md         # Translation documentation
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
"use client";

import { useAppContext } from "@/context/AppContext";

export default function MyComponent() {
  const { locale, setLocale } = useAppContext();
  // Your component logic
}
```

## Using Translations

The translation system is namespace-based, allowing each page or component to have its own translation files.

### Basic Usage

Use the `useTranslation` hook with a namespace parameter:

```tsx
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MyComponent() {
  // Use translations from the 'home' namespace
  const { t } = useTranslation("home");

  return <h1>{t("welcome")}</h1>;
}
```

### Using Multiple Namespaces

You can use multiple namespaces in the same component:

```tsx
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MyComponent() {
  const { t } = useTranslation("home");
  const { t: tCommon } = useTranslation("common");

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button>{tCommon("changeLanguage")}</button>
    </div>
  );
}
```

### Nested Translation Keys

Translations support nested keys using dot notation:

```tsx
// In locales/home/en.json:
{
  "features": {
    "title": "Features",
    "nextjs": "Next.js 15 with App Router"
  }
}

// In your component:
{t('features.title')}  // Returns "Features"
{t('features.nextjs')} // Returns "Next.js 15 with App Router"
```

### Adding New Translation Namespaces

1. Create a new directory under `locales/` with your namespace name (e.g., `locales/about/`)
2. Add translation files for each locale in the new namespace:
   - `locales/about/en.json`
   - `locales/about/es.json`
   - `locales/about/fr.json`
3. Import the new translations in `utils/translations.ts`:

```ts
import aboutEn from '@/locales/about/en.json';
import aboutEs from '@/locales/about/es.json';
import aboutFr from '@/locales/about/fr.json';

const translationCache: TranslationCache = {
  common: { ... },
  home: { ... },
  about: {
    en: aboutEn,
    es: aboutEs,
    fr: aboutFr,
  },
};
```

4. Use the new namespace in your component:

```tsx
const { t } = useTranslation("about");
```

## Adding New Languages

1. Add translation files for each namespace:
   - `locales/common/de.json`
   - `locales/home/de.json`
   - etc.

2. Import and add the language in `utils/translations.ts`:

```ts
import commonDe from "@/locales/common/de.json";
import homeDe from "@/locales/home/de.json";

const translationCache: TranslationCache = {
  common: {
    en: commonEn,
    es: commonEs,
    fr: commonFr,
    de: commonDe,
  },
  home: {
    en: homeEn,
    es: homeEs,
    fr: homeFr,
    de: homeDe,
  },
};

export const availableLocales = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
];
```

## Benefits of Namespace-Based Translations

- **Better Organization**: Each page/component has its own translation file
- **Scalability**: Easier to manage translations as the app grows
- **Maintainability**: Changes to one page's translations don't affect others
- **Team Collaboration**: Multiple developers can work on different translation files without conflicts
- **Clear Separation**: Translation keys are scoped to specific features

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
};
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
