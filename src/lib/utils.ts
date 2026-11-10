export function formatCurrency(value: number, locale: 'pt-BR' | 'en-US' = 'pt-BR', currency = 'BRL'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value: number, locale: 'pt-BR' | 'en-US' = 'pt-BR'): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const BRAZILIAN_STATES = [
  { code: 'AC', name: 'Acre' },
  { code: 'AL', name: 'Alagoas' },
  { code: 'AP', name: 'Amapá' },
  { code: 'AM', name: 'Amazonas' },
  { code: 'BA', name: 'Bahia' },
  { code: 'CE', name: 'Ceará' },
  { code: 'DF', name: 'Distrito Federal' },
  { code: 'ES', name: 'Espírito Santo' },
  { code: 'GO', name: 'Goiás' },
  { code: 'MA', name: 'Maranhão' },
  { code: 'MT', name: 'Mato Grosso' },
  { code: 'MS', name: 'Mato Grosso do Sul' },
  { code: 'MG', name: 'Minas Gerais' },
  { code: 'PA', name: 'Pará' },
  { code: 'PB', name: 'Paraíba' },
  { code: 'PR', name: 'Paraná' },
  { code: 'PE', name: 'Pernambuco' },
  { code: 'PI', name: 'Piauí' },
  { code: 'RJ', name: 'Rio de Janeiro' },
  { code: 'RN', name: 'Rio Grande do Norte' },
  { code: 'RS', name: 'Rio Grande do Sul' },
  { code: 'RO', name: 'Rondônia' },
  { code: 'RR', name: 'Roraima' },
  { code: 'SC', name: 'Santa Catarina' },
  { code: 'SP', name: 'São Paulo' },
  { code: 'SE', name: 'Sergipe' },
  { code: 'TO', name: 'Tocantins' },
];

export const ICMS_RATES: Record<string, number> = {
  AC: 17, AL: 18, AP: 18, AM: 18, BA: 19, CE: 19, DF: 18,
  ES: 17, GO: 19, MA: 19, MT: 17, MS: 17, MG: 18, PA: 17,
  PB: 18, PR: 18, PE: 18, PI: 19, RJ: 20, RN: 18, RS: 17,
  RO: 17, RR: 17, SC: 17, SP: 18, SE: 18, TO: 18,
};

export const SERVICE_OPTIONS = {
  pt: [
    { value: 'import', label: 'Importação' },
    { value: 'export', label: 'Exportação' },
    { value: 'classification', label: 'Classificação Fiscal (NCM)' },
    { value: 'regimes', label: 'Regimes Aduaneiros Especiais' },
    { value: 'compliance', label: 'Compliance Aduaneiro' },
    { value: 'consulting', label: 'Consultoria Tributária Internacional' },
    { value: 'other', label: 'Outros' },
  ],
  en: [
    { value: 'import', label: 'Import' },
    { value: 'export', label: 'Export' },
    { value: 'classification', label: 'Tax Classification (NCM)' },
    { value: 'regimes', label: 'Special Customs Regimes' },
    { value: 'compliance', label: 'Customs Compliance' },
    { value: 'consulting', label: 'International Tax Consulting' },
    { value: 'other', label: 'Other' },
  ],
};

export const WHATSAPP_NUMBER = '5511993236724';
export const WHATSAPP_MESSAGE = {
  pt: 'Olá! Gostaria de falar com um especialista em comércio exterior.',
  en: 'Hello! I would like to speak with a foreign trade specialist.',
};