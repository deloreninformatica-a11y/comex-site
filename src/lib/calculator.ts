import { ICMS_RATES } from './utils';

export interface CalculatorInput {
  ncm: string;
  fobValue: number;
  freight: number;
  insurance: number;
  state: string;
}

export interface TaxBreakdown {
  label: string;
  key: string;
  value: number;
  rate?: string;
  base?: number;
}

export interface CalculatorResult {
  breakdown: TaxBreakdown[];
  totalTaxes: number;
  totalCost: number;
  cifValue: number;
  taxableBase: number;
}

// Alíquotas padrão por NCM (primeiros 4 dígitos) - valores exemplificativos
const NCM_RATES: Record<string, { ii: number; ipi: number }> = {
  '8471': { ii: 0, ipi: 0 },      // Computadores
  '8517': { ii: 0, ipi: 0 },      // Telefones
  '8703': { ii: 35, ipi: 15 },    // Automóveis
  '8704': { ii: 20, ipi: 5 },     // Caminhões
  '3004': { ii: 0, ipi: 0 },      // Medicamentos
  '2710': { ii: 0, ipi: 0 },      // Combustíveis
  '2204': { ii: 20, ipi: 15 },    // Vinhos
  '0901': { ii: 10, ipi: 5 },     // Café
  'default': { ii: 18, ipi: 10 }, // Padrão
};

function getNCMRates(ncm: string): { ii: number; ipi: number } {
  const prefix = ncm.replace(/\D/g, '').substring(0, 4);
  return NCM_RATES[prefix] || NCM_RATES.default;
}

export function calculateImportTaxes(input: CalculatorInput): CalculatorResult {
  const { fobValue, freight, insurance, state } = input;

  // CIF = FOB + Frete + Seguro
  const cifValue = fobValue + freight + insurance;

  // Taxa de câmbio fixa para simulação (em produção viria de API)
  const exchangeRate = 5.25;
  const cifBRL = cifValue * exchangeRate;

  // Alíquotas
  const { ii: iiRate, ipi: ipiRate } = getNCMRates(input.ncm);
  const pisRate = 2.1;
  const cofinsRate = 9.65;
  const icmsRate = ICMS_RATES[state] || 18;
  const siscomexRate = 185; // Taxa fixa por DI
  const afrmmRate = 0.25; // 0.25% sobre frete marítimo

  // Base de cálculo do II = CIF
  const iiBase = cifBRL;
  const iiValue = (iiBase * iiRate) / 100;

  // Base de cálculo do IPI = CIF + II
  const ipiBase = cifBRL + iiValue;
  const ipiValue = (ipiBase * ipiRate) / 100;

  // Base de cálculo PIS/COFINS = CIF
  const pisCofinsBase = cifBRL;
  const pisValue = (pisCofinsBase * pisRate) / 100;
  const cofinsValue = (pisCofinsBase * cofinsRate) / 100;

  // Base de cálculo ICMS = CIF + II + IPI + PIS + COFINS + Taxas
  const icmsBase = cifBRL + iiValue + ipiValue + pisValue + cofinsValue + siscomexRate;
  const icmsValue = (icmsBase * icmsRate) / 100;

  // AFRMM sobre frete (assumindo frete marítimo)
  const afrmmValue = (freight * exchangeRate * afrmmRate) / 100;

  const breakdown: TaxBreakdown[] = [
    { label: 'Imposto de Importação (II)', key: 'ii', value: iiValue, rate: `${iiRate}%`, base: iiBase },
    { label: 'IPI', key: 'ipi', value: ipiValue, rate: `${ipiRate}%`, base: ipiBase },
    { label: 'PIS-Importação', key: 'pis', value: pisValue, rate: `${pisRate}%`, base: pisCofinsBase },
    { label: 'COFINS-Importação', key: 'cofins', value: cofinsValue, rate: `${cofinsRate}%`, base: pisCofinsBase },
    { label: 'ICMS', key: 'icms', value: icmsValue, rate: `${icmsRate}%`, base: icmsBase },
    { label: 'Taxa SISCOMEX', key: 'siscomex', value: siscomexRate },
    { label: 'AFRMM', key: 'afrmm', value: afrmmValue, rate: `${afrmmRate}%` },
  ];

  const totalTaxes = breakdown.reduce((sum, item) => sum + item.value, 0);
  const totalCost = cifBRL + totalTaxes;

  return {
    breakdown,
    totalTaxes,
    totalCost,
    cifValue: cifBRL,
    taxableBase: icmsBase,
  };
}

export function validateNCM(ncm: string): boolean {
  // NCM: 8 dígitos, pode ter pontos
  const clean = ncm.replace(/\D/g, '');
  return clean.length === 8;
}

export function formatNCM(ncm: string): string {
  const clean = ncm.replace(/\D/g, '');
  if (clean.length === 8) {
    return `${clean.substring(0,4)}.${clean.substring(4,6)}.${clean.substring(6,8)}`;
  }
  return ncm;
}