import { getTranslation, type Locale } from '@/lib/translations';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'About Us',
    description: 'Meet Deloren Comex: 15+ years of experience transforming customs complexity into competitive advantage. Mission, vision, values, and team.',
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = (key: string) => getTranslation(locale, key);

  const values = t('about.values.list').split('|').map(v => v.trim());

  return (
    <div className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center max-w-3xl mx-auto mb-20" aria-labelledby="about-hero-title">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-4">
            {t('about.title')}
          </span>
          <h1 id="about-hero-title" className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </section>

        <section className="mb-20" aria-labelledby="story-title">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 id="story-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="prose dark:prose-invert max-w-none space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('about.description1')}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('about.description2')}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Over these years, we have built a solid reputation based on concrete results: hundreds of projects delivered, millions in tax savings generated for our clients, and a network of international partners allowing us to operate in more than 40 countries.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <svg className="w-32 h-32 mx-auto mb-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-white/70 text-lg">
                    Multidisciplinary team: lawyers, accountants, customs brokers, and international logistics specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20" aria-labelledby="mvv-title">
          <h2 id="mvv-title" className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Mission, Vision & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('about.mission')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('about.mission.text')}</p>
            </article>

            <article className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('about.vision')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('about.vision.text')}</p>
            </article>

            <article className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('about.values')}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {values.map((value, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {value}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section aria-labelledby="team-title">
          <h2 id="team-title" className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Experience</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-400">Clients Served</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-2">40+</div>
              <div className="text-gray-600 dark:text-gray-400">Countries Served</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}