'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { calculateImportTaxes, validateNCM, formatNCM, type CalculatorInput, type CalculatorResult } from '@/lib/calculator';
import { formatCurrency, BRAZILIAN_STATES } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';
import { useTranslation } from '@/hooks/useTranslation';

interface CalculatorProps {
  locale: Locale;
}

export function Calculator({ locale }: CalculatorProps) {
  const { t } = useTranslation(locale);
  const [formData, setFormData] = useState<CalculatorInput>({
    ncm: '',
    fobValue: 0,
    freight: 0,
    insurance: 0,
    state: 'SP',
  });
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof CalculatorInput, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.ncm.trim()) {
      newErrors.ncm = locale === 'pt' ? 'NCM é obrigatório' : 'NCM is required';
    } else if (!validateNCM(formData.ncm)) {
      newErrors.ncm = locale === 'pt' ? 'NCM deve ter 8 dígitos' : 'NCM must have 8 digits';
    }

    if (formData.fobValue <= 0) {
      newErrors.fobValue = locale === 'pt' ? 'Valor FOB deve ser maior que zero' : 'FOB value must be greater than zero';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const calculation = calculateImportTaxes(formData);
      setResult(calculation);
      setLoading(false);
    }, 500);
  };

  const formattedNCM = formData.ncm ? formatNCM(formData.ncm) : '';

  return (
    <section id="calculadora" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50" aria-labelledby="calculator-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-4">
            {t('calculator.title')}
          </span>
          <h2 id="calculator-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('calculator.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('calculator.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <Card variant="elevated" padding="lg">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label={t('calculator.ncm')}
                  placeholder={t('calculator.ncm.placeholder')}
                  value={formattedNCM || formData.ncm}
                  onChange={(e) => handleChange('ncm', e.target.value.replace(/[^0-9.]/g, ''))}
                  error={errors.ncm}
                  helperText={locale === 'pt' ? 'Ex: 8471.30.12 (8 dígitos)' : 'Ex: 8471.30.12 (8 digits)'}
                  required
                  autoComplete="off"
                />
                <Select
                  label={t('calculator.state')}
                  options={BRAZILIAN_STATES.map(s => ({ value: s.code, label: `${s.code} - ${s.name}` }))}
                  value={formData.state}
                  onChange={(e) => handleChange('state', e.target.value)}
                  placeholder={t('calculator.state')}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label={t('calculator.value')}
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder={t('calculator.value.placeholder')}
                  value={formData.fobValue}
                  onChange={(e) => handleChange('fobValue', parseFloat(e.target.value) || 0)}
                  error={errors.fobValue}
                  required
                />
                <Input
                  label={t('calculator.freight')}
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0"
                  value={formData.freight}
                  onChange={(e) => handleChange('freight', parseFloat(e.target.value) || 0)}
                />
              </div>

              <Input
                label={t('calculator.insurance')}
                type="number"
                step="0.01"
                min="0"
                placeholder="0"
                value={formData.insurance}
                onChange={(e) => handleChange('insurance', parseFloat(e.target.value) || 0)}
              />

              <Button type="submit" variant="primary" className="w-full" size="lg" loading={loading}>
                {t('calculator.calculate')}
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {t('calculator.disclaimer')}
              </p>
            </form>
          </Card>

          {/* Results */}
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <CardTitle className="text-xl">{t('calculator.results')}</CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  {/* CIF Value */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                    <div className="text-sm text-blue-700 dark:text-blue-300">{locale === 'pt' ? 'Valor CIF (BRL)' : 'CIF Value (BRL)'}</div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                      {formatCurrency(result.cifValue, locale === 'pt' ? 'pt-BR' : 'en-US')}
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('calculator.breakdown')}</h3>
                    <div className="space-y-2">
                      {result.breakdown.map((tax) => (
                        <div key={tax.key} className="flex justify-between items-center py-2 px-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-gray-700 dark:text-gray-300">{tax.label}</span>
                            {tax.rate && (
                              <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded">
                                {tax.rate}
                              </span>
                            )}
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {formatCurrency(tax.value, locale === 'pt' ? 'pt-BR' : 'en-US')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">{t('calculator.total')}</span>
                      <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        {formatCurrency(result.totalCost, locale === 'pt' ? 'pt-BR' : 'en-US')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                      {locale === 'pt'
                        ? `CIF: ${formatCurrency(result.cifValue, 'pt-BR')} + Tributos: ${formatCurrency(result.totalTaxes, 'pt-BR')}`
                        : `CIF: ${formatCurrency(result.cifValue, 'en-US')} + Taxes: ${formatCurrency(result.totalTaxes, 'en-US')}`}
                    </p>
                  </div>

                  <Button variant="outline" className="w-full mt-4" onClick={() => setResult(null)}>
                    {locale === 'pt' ? 'Nova simulação' : 'New simulation'}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-lg">{locale === 'pt' ? 'Preencha o formulário para ver a simulação' : 'Fill the form to see simulation'}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}