import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Calculator } from '@/components/sections/Calculator';
import { About } from '@/components/sections/About';
import { Blog } from '@/components/sections/Blog';
import { CTA } from '@/components/sections/CTA';
import { ContactForm } from '@/components/sections/Contact';
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
    title: locale === 'pt'
      ? 'Especialistas em Comércio Exterior | Deloren Comex'
      : 'Foreign Trade Specialists | Deloren Comex',
    description: locale === 'pt'
      ? 'Simplificamos suas operações de importação e exportação com inteligência aduaneira, compliance e redução de custos. Drawback, classificação fiscal, regimes especiais.'
      : 'We simplify your import and export operations with customs intelligence, compliance, and cost reduction. Drawback, tax classification, special regimes.',
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <Services locale={locale} />
      <Calculator locale={locale} />
      <About locale={locale} />
      <Blog locale={locale} />
      <CTA locale={locale} />
      <ContactForm locale={locale} />
    </>
  );
}