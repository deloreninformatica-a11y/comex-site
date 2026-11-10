import { getTranslation, type Locale } from '@/lib/translations';
import { Calculator } from '@/components/sections/Calculator';
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
    title: locale === 'pt' ? 'Serviços de Comércio Exterior' : 'Foreign Trade Services',
    description: locale === 'pt'
      ? 'Serviços completos: importação, exportação, classificação fiscal NCM, regimes aduaneiros especiais (drawback, entreposto, RECOF), compliance aduaneiro e consultoria tributária internacional.'
      : 'Complete services: import, export, NCM tax classification, special customs regimes (drawback, warehouse, RECOF), customs compliance, and international tax consulting.',
  };
}

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  items: string[];
}

const servicesDetail: Record<'pt' | 'en', ServiceDetail[]> = {
  pt: [
    {
      id: 'import',
      title: 'Importação',
      description: 'Gestão completa do processo de importação, desde o planejamento até o desembaraço aduaneiro.',
      items: [
        'Licenciamento de importação (LI, LPCO)',
        'Classificação fiscal (NCM) e validação',
        'Regimes aduaneiros especiais',
        'Drawback suspensão e isenção',
        'Ex-tarifário para BK e BIT',
        'Desembaraço aduaneiro (canal verde, vermelho, cinza)',
        'Gestão de tributos: II, IPI, PIS, COFINS, ICMS, AFRMM',
        'Consultoria em valoração aduaneira',
      ],
    },
    {
      id: 'export',
      title: 'Exportação',
      description: 'Planejamento e execução de operações de exportação com foco em eficiência e compliance.',
      items: [
        'Habilitação RADAR (Expresso, Limitado, Ilimitado)',
        'Classificação fiscal e NCM para exportação',
        'Certificados de origem (Mercosul, ALADI, acordos bilaterais)',
        'Drawback integrado (suspensão + isenção + restituição)',
        'Regimes aduaneiros especiais de exportação',
        'Logística internacional e Incoterms',
        'Planejamento tributário de exportação',
        'Acompanhamento de embarque e documentação',
      ],
    },
    {
      id: 'classification',
      title: 'Classificação Fiscal (NCM)',
      description: 'Análise técnica especializada para classificação correta de mercadorias na Nomenclatura Comum do Mercosul.',
      items: [
        'Classificação fiscal de novos produtos',
        'Revisão e auditoria de NCM existente',
        'Consulta de classificação à RFB (quando cabível)',
        'Defesa em fiscalizações e auto de infração',
        'Estudo de enquadramento nas Regras Gerais de Interpretação',
        'Análise de notas explicativas do SH/NCM',
        'Classificação de kits, conjuntos e mercadorias compostas',
        'Treinamento de equipe interna em classificação',
      ],
    },
    {
      id: 'regimes',
      title: 'Regimes Aduaneiros Especiais',
      description: 'Implementação e gestão de regimes que reduzem ou suspendem tributos em operações específicas.',
      items: [
        'Drawback (suspensão, isenção, restituição)',
        'Entreposto Aduaneiro (importação e exportação)',
        'RECOF e RECOF-SPED',
        'Admissão Temporária',
        'Depósito Alfandegado Certificado (DAC)',
        'Regime Aduaneiro Especial de Exportação',
        'Análise de viabilidade e enquadramento',
        'Gestão de controles e prorrogações',
      ],
    },
    {
      id: 'compliance',
      title: 'Compliance Aduaneiro',
      description: 'Programas estruturados de conformidade para mitigar riscos e obter benefícios operacionais.',
      items: [
        'Auditoria de processos de importação/exportação',
        'Due diligence aduaneira',
        'Programa OEA (Operador Econômico Autorizado)',
        'Gestão de riscos aduaneiros',
        'Controles internos e procedimentos operacionais',
        'Treinamentos e capacitação de equipes',
        'Monitoramento de legislação e jurisprudência',
        'Resposta a fiscalizações e intimações',
      ],
    },
    {
      id: 'consulting',
      title: 'Consultoria Tributária Internacional',
      description: 'Planejamento estratégico para otimização da carga tributária em operações cross-border.',
      items: [
        'Planejamento de estrutura societária internacional',
        'Acordos para evitar bitributação',
        'Transfer pricing (preços de transferência)',
        'IVA/VAT internacional e recuperação de créditos',
        'Otimização de cadeia de suprimentos global',
        'Análise de benefícios fiscais por país',
        'Reestruturação de operações cross-border',
        'Assessoria em investimentos no exterior',
      ],
    },
  ],
  en: [
    {
      id: 'import',
      title: 'Import',
      description: 'Complete management of the import process, from planning to customs clearance.',
      items: [
        'Import licensing (LI, LPCO)',
        'Tax classification (NCM) and validation',
        'Special customs regimes',
        'Drawback suspension and exemption',
        'Ex-tariff for capital and IT goods',
        'Customs clearance (green, red, gray channels)',
        'Tax management: II, IPI, PIS, COFINS, ICMS, AFRMM',
        'Customs valuation consulting',
      ],
    },
    {
      id: 'export',
      title: 'Export',
      description: 'Planning and execution of export operations with focus on efficiency and compliance.',
      items: [
        'RADAR qualification (Express, Limited, Unlimited)',
        'Tax classification and NCM for export',
        'Certificates of origin (Mercosur, ALADI, bilateral agreements)',
        'Integrated drawback (suspension + exemption + restitution)',
        'Special export customs regimes',
        'International logistics and Incoterms',
        'Export tax planning',
        'Shipment tracking and documentation',
      ],
    },
    {
      id: 'classification',
      title: 'Tax Classification (NCM)',
      description: 'Specialized technical analysis for correct classification of goods in the Mercosur Common Nomenclature.',
      items: [
        'Classification of new products',
        'Review and audit of existing NCM',
        'Classification consultation with RFB (when applicable)',
        'Defense in audits and infringement notices',
        'General Interpretative Rules analysis',
        'SH/NCM explanatory notes analysis',
        'Classification of kits, sets, and composite goods',
        'Internal team training on classification',
      ],
    },
    {
      id: 'regimes',
      title: 'Special Customs Regimes',
      description: 'Implementation and management of regimes that reduce or suspend taxes in specific operations.',
      items: [
        'Drawback (suspension, exemption, restitution)',
        'Customs Warehouse (import and export)',
        'RECOF and RECOF-SPED',
        'Temporary Admission',
        'Certified Customs Warehouse (DAC)',
        'Special Export Customs Regime',
        'Feasibility and framing analysis',
        'Control management and extensions',
      ],
    },
    {
      id: 'compliance',
      title: 'Customs Compliance',
      description: 'Structured compliance programs to mitigate risks and obtain operational benefits.',
      items: [
        'Import/export process auditing',
        'Customs due diligence',
        'AEO (Authorized Economic Operator) Program',
        'Customs risk management',
        'Internal controls and operating procedures',
        'Training and team capacitation',
        'Legislation and jurisprudence monitoring',
        'Response to audits and summons',
      ],
    },
    {
      id: 'consulting',
      title: 'International Tax Consulting',
      description: 'Strategic planning for tax burden optimization in cross-border operations.',
      items: [
        'International corporate structure planning',
        'Double taxation treaties',
        'Transfer pricing',
        'International VAT and credit recovery',
        'Global supply chain optimization',
        'Tax benefit analysis by country',
        'Cross-border operations restructuring',
        'Advisory on foreign investments',
      ],
    },
  ],
};

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = (key: string) => getTranslation(locale, key);
  const services = servicesDetail[locale];

  return (
    <div className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-16" aria-labelledby="services-hero-title">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-4">
            {t('services.title')}
          </span>
          <h1 id="services-hero-title" className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('services.subtitle')}
          </p>
        </section>

        {/* Services Grid */}
        <section aria-labelledby="services-list-title">
          <h2 id="services-list-title" className="sr-only">{t('services.title')}</h2>
          <div className="space-y-16">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white h-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4 backdrop-blur-sm">
                      {index + 1}. {service.title}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-blue-100 mb-6 text-lg">{service.description}</p>
                    <ul className="space-y-3" role="list">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-blue-50">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl relative overflow-hidden">
                    {service.id === 'import' ? (
                      <img
                        src="/images/industrial-port-container-yard.jpg"
                        alt={locale === 'pt' ? 'Terminal portuário com contêineres para importação' : 'Port terminal with containers for import'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center">
                            <svg className="w-24 h-24 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              {service.id === 'export' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              )}
                              {service.id === 'classification' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              )}
                              {service.id === 'regimes' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              )}
                              {service.id === 'compliance' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              )}
                              {service.id === 'consulting' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              )}
                            </svg>
                            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                              {locale === 'pt'
                                ? `Ilustração representativa de ${service.title.toLowerCase()}`
                                : `Illustration representing ${service.title.toLowerCase()}`}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Calculator CTA */}
        <section className="mt-20" aria-labelledby="calculator-cta-title">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 lg:p-12 text-center text-white">
            <h2 id="calculator-cta-title" className="text-3xl font-bold mb-4">
              {locale === 'pt' ? 'Precisa estimar os custos de importação?' : 'Need to estimate import costs?'}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {locale === 'pt'
                ? 'Use nossa calculadora de tributos para simular II, IPI, PIS, COFINS, ICMS e taxas. Rápido, gratuito e sem cadastro.'
                : 'Use our tax calculator to simulate II, IPI, PIS, COFINS, ICMS, and fees. Fast, free, and no registration required.'}
            </p>
            <a href={`/${locale}#calculadora`}>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                {locale === 'pt' ? 'Acessar Calculadora' : 'Open Calculator'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}