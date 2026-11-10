import { getTranslation, type Locale } from '@/lib/translations';
import { ContactForm } from '@/components/sections/Contact';
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
    title: 'Contact Us',
    description: 'Contact Deloren Comex. Fill out the form or call us on WhatsApp. We respond within 2 business hours.',
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <div className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm locale={locale} />
      </div>
    </div>
  );
}