import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getTranslation, type Locale } from '@/lib/translations';
import { isValidLocale } from '@/lib/i18n';
import type { Metadata } from 'next';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : 'pt';
  const t = getTranslation(validLocale, '');

  return {
    title: validLocale === 'pt' ? 'Deloren Comex | Especialistas em Comércio Exterior' : 'Deloren Comex | Foreign Trade Specialists',
    description: validLocale === 'pt'
      ? 'Simplificamos suas operações de importação e exportação com inteligência aduaneira, compliance e redução de custos.'
      : 'We simplify your import and export operations with customs intelligence, compliance, and cost reduction.',
    alternates: {
      languages: {
        'pt-BR': '/pt',
        'en': '/en',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : 'pt';
  const t = (key: string) => getTranslation(validLocale, key);

  return (
    <>
      <Header locale={validLocale} />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer locale={validLocale} t={t} />
    </>
  );
}