'use client';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('welcome')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('description')}
            </p>
          </div>

          {/* Language Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {t('changeLanguage')}
              </h2>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t('features.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Next.js 15
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('features.nextjs')}
                </p>
              </div>
              <div className="p-6 bg-purple-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Tailwind CSS
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('features.tailwind')}
                </p>
              </div>
              <div className="p-6 bg-green-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  React Context
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('features.context')}
                </p>
              </div>
              <div className="p-6 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  i18n
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('features.i18n')}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              {t('getStarted')}
            </button>
            <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg">
              {t('learnMore')}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
