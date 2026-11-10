'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Locale } from '@/lib/i18n';
import { useTranslation } from '@/hooks/useTranslation';

interface CTAProps {
  locale: Locale;
}

export function CTA({ locale }: CTAProps) {
  const { t } = useTranslation(locale);
  return (
    <section className="py-20 lg:py-32" aria-labelledby="cta-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900 to-transparent" aria-hidden="true" />

          <div className="relative py-16 lg:py-24 px-8 lg:px-16 max-w-3xl">
            <h2 id="cta-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {locale === 'pt'
                ? 'Pronto para otimizar suas operações de comércio exterior?'
                : 'Ready to optimize your foreign trade operations?'}
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              {locale === 'pt'
                ? 'Agende uma conversa com nossos especialistas e descubra como reduzir custos, garantir compliance e acelerar seus processos de importação e exportação.'
                : 'Schedule a conversation with our specialists and discover how to reduce costs, ensure compliance, and accelerate your import and export processes.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/contato`}>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  {t('hero.cta.primary')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <a
                href={`https://wa.me/5511993236724?text=${encodeURIComponent(locale === 'pt' ? 'Olá! Gostaria de falar com um especialista em comércio exterior.' : 'Hello! I would like to speak with a foreign trade specialist.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.42.01-.643.078-.223.069-.48.242-.767.715-.253.418-.487.85-.487.917 0 .058.01.149.025.223.01.068.172.168.37.316.223.168.48.402.48.85 0 .47-.15.916-.316 1.192-.222.298-.578.788-.97 1.397-.372.579-.772 1.174-1.017 1.412-.242.242-.52.414-.715.488-.172.074-.502.123-.733.123-.297 0-.67-.124-.94-.372zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.011L2 22l5.335-1.342A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                  {t('contact.whatsapp')}
                </Button>
              </a>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              {locale === 'pt'
                ? 'Resposta em até 2 horas úteis • Sem compromisso • Confidencialidade garantida'
                : 'Response within 2 business hours • No obligation • Confidentiality guaranteed'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}