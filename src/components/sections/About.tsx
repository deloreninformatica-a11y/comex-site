'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { useTranslation } from '@/hooks/useTranslation';

interface AboutProps {
  locale: Locale;
}

export function About({ locale }: AboutProps) {
  const { t } = useTranslation(locale);
  const values = t('about.values.list').split('|').map(v => v.trim());

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white dark:bg-gray-900" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-4">
              {t('about.title')}
            </span>
            <h2 id="about-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.title')}
            </h2>
            <div className="prose dark:prose-invert max-w-none mb-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {t('about.description2')}
              </p>
            </div>

            {/* Mission Vision Values */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <Card variant="outlined" padding="md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('about.mission')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t('about.mission.text')}</p>
              </Card>
              <Card variant="outlined" padding="md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('about.vision')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t('about.vision.text')}</p>
              </Card>
              <Card variant="outlined" padding="md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('about.values')}</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {values.map((value, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {value}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Link href={`/${locale}/sobre`}>
              <Button variant="outline">
                {locale === 'pt' ? 'Conheça nossa história' : 'Learn our story'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto mb-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <p className="text-white/50 text-lg max-w-xs mx-auto">
                    {locale === 'pt'
                      ? 'Nossa equipe multidisciplinar combina expertise jurídica, tributária e logística'
                      : 'Our multidisciplinary team combines legal, tax, and logistics expertise'}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {locale === 'pt' ? 'Anos de experiência' : 'Years of experience'}
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {locale === 'pt' ? 'Clientes ativos' : 'Active clients'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}