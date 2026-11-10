'use client';

import { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Select, Textarea } from '@/components/ui/Input';
import { SERVICE_OPTIONS } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';
import { useTranslation } from '@/hooks/useTranslation';

interface ContactFormProps {
  locale: Locale;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export function ContactForm({ locale }: ContactFormProps) {
  const { t } = useTranslation(locale);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = locale === 'pt' ? 'Nome é obrigatório' : 'Name is required';
    if (!formData.email.trim()) newErrors.email = locale === 'pt' ? 'E-mail é obrigatório' : 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = locale === 'pt' ? 'E-mail inválido' : 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = locale === 'pt' ? 'Telefone é obrigatório' : 'Phone is required';
    if (!formData.message.trim()) newErrors.message = locale === 'pt' ? 'Mensagem é obrigatória' : 'Message is required';
    if (formData.message.trim().length < 20) newErrors.message = locale === 'pt' ? 'Mensagem muito curta (mín. 20 caracteres)' : 'Message too short (min. 20 chars)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const response = await fetch(`/${locale}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-white dark:bg-gray-900" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-4">
              {t('contact.title')}
            </span>
            <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{locale === 'pt' ? 'E-mail' : 'Email'}</h3>
                  <a href="mailto:requena.daniel@gmail.com" className="text-blue-700 dark:text-blue-300 hover:underline">requena.daniel@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{locale === 'pt' ? 'Telefone' : 'Phone'}</h3>
                  <a href="tel:+5511993236724" className="text-blue-700 dark:text-blue-300 hover:underline">+55 11 99323-6724</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{locale === 'pt' ? 'Endereço' : 'Address'}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {locale === 'pt'
                      ? 'Rua Lázaro Bueno, 140\nSão Paulo - SP'
                      : 'Rua Lázaro Bueno, 140\nSão Paulo - SP'}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/5511993236724?text=${encodeURIComponent(t('contact.whatsapp.text'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.42.01-.643.078-.223.069-.48.242-.767.715-.253.418-.487.85-.487.917 0 .058.01.149.025.223.01.068.172.168.37.316.223.168.48.402.48.85 0 .47-.15.916-.316 1.192-.222.298-.578.788-.97 1.397-.372.579-.772 1.174-1.017 1.412-.242.242-.52.414-.715.488-.172.074-.502.123-.733.123-.297 0-.67-.124-.94-.372zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.011L2 22l5.335-1.342A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              <div>
                <p className="font-semibold">{t('contact.whatsapp')}</p>
                <p className="text-sm opacity-90">{t('contact.whatsapp.text')}</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <CardTitle className="text-xl">{locale === 'pt' ? 'Envie sua mensagem' : 'Send us a message'}</CardTitle>
            </CardHeader>
            <CardContent>
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-300" role="alert">
                  {t('contact.success')}
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-300" role="alert">
                  {t('contact.error')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label={t('contact.name')}
                    placeholder={locale === 'pt' ? 'Seu nome completo' : 'Your full name'}
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    error={errors.name}
                    required
                    autoComplete="name"
                  />
                  <Input
                    label={t('contact.email')}
                    type="email"
                    placeholder={locale === 'pt' ? 'seu@email.com' : 'your@email.com'}
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    error={errors.email}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label={t('contact.phone')}
                    type="tel"
                    placeholder={locale === 'pt' ? '(11) 99999-9999' : '+55 11 99999-9999'}
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    error={errors.phone}
                    required
                    autoComplete="tel"
                  />
                  <Input
                    label={t('contact.company')}
                    placeholder={locale === 'pt' ? 'Nome da empresa' : 'Company name'}
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    autoComplete="organization"
                  />
                </div>

                <Select
                  label={t('contact.service')}
                  options={SERVICE_OPTIONS[locale]}
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  placeholder={t('contact.service')}
                />

                <Textarea
                  label={t('contact.message')}
                  placeholder={locale === 'pt' ? 'Descreva sua necessidade...' : 'Describe your needs...'}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  error={errors.message}
                  rows={5}
                  required
                />

                <Button type="submit" variant="primary" className="w-full" size="lg" loading={status === 'submitting'}>
                  {t('contact.submit')}
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  {locale === 'pt'
                    ? 'Ao enviar, você concorda com nossa Política de Privacidade e Termos de Uso.'
                    : 'By submitting, you agree to our Privacy Policy and Terms of Use.'}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}