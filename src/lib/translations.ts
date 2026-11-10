import type { Locale } from './i18n';
export type { Locale } from './i18n';

export const translations: Record<Locale, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',
    'nav.language': 'Idioma',

    // Hero
    'hero.title': 'Especialistas em Comércio Exterior',
    'hero.subtitle': 'Simplificamos suas operações de importação e exportação com inteligência aduaneira, compliance e redução de custos.',
    'hero.cta.primary': 'Falar com Especialista',
    'hero.cta.secondary': 'Nossos Serviços',
    'hero.stats.projects': 'Projetos Entregues',
    'hero.stats.clients': 'Clientes Ativos',
    'hero.stats.countries': 'Países Atendidos',
    'hero.stats.savings': 'Economia Média',

    // About
    'about.title': 'Sobre Nós',
    'about.subtitle': 'Transformamos complexidade aduaneira em vantagem competitiva para o seu negócio.',
    'about.description1': 'Com mais de 15 anos de experiência em comércio exterior, ajudamos empresas de todos os portes a navegar pelas complexidades das operações internacionais. Nossa equipe multidisciplinar combina expertise jurídica, tributária e logística para entregar resultados mensuráveis.',
    'about.description2': 'Acreditamos que compliance não é custo — é investimento. Cada processo que otimizamos, cada classificação que revisamos, cada regime especial que implementamos gera economia real e segurança jurídica para sua operação.',
    'about.mission': 'Missão',
    'about.mission.text': 'Facilitar o comércio internacional brasileiro com excelência técnica e ética.',
    'about.vision': 'Visão',
    'about.vision.text': 'Ser a referência em inteligência aduaneira na América Latina até 2030.',
    'about.values': 'Valores',
    'about.values.list': 'Integridade acima de tudo|Excelência técnica contínua|Parceria de longo prazo|Inovação com responsabilidade',

    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções completas para toda a cadeia de comércio exterior',
    'services.import.title': 'Importação',
    'services.import.desc': 'Gestão completa: licenciamento, classificação fiscal (NCM), regimes especiais, drawback, ex-tarifário e desembaraço aduaneiro.',
    'services.export.title': 'Exportação',
    'services.export.desc': 'Planejamento tributário, habilitação RADAR, certificação de origem, Drawback, regimes aduaneiros especiais e logística internacional.',
    'services.classification.title': 'Classificação Fiscal (NCM)',
    'services.classification.desc': 'Análise técnica de classificação fiscal, revisão de NCM, consultas de classificação e defesa em fiscalizações.',
    'services.regimes.title': 'Regimes Aduaneiros Especiais',
    'services.regimes.desc': 'Drawback, Entreposto Aduaneiro, RECOF, RECOF-SPED, Admissão Temporária, Depósito Alfandegado Certificado (DAC).',
    'services.compliance.title': 'Compliance Aduaneiro',
    'services.compliance.desc': 'Auditoria de processos, due diligence, Programa OEA, gestão de riscos, treinamentos e implementação de controles internos.',
    'services.consulting.title': 'Consultoria Tributária Internacional',
    'services.consulting.desc': 'Planejamento de estrutura societária, acordos de bitributação, transfer pricing, IVA internacional e otimização de carga tributária.',

    // Calculator
    'calculator.title': 'Calculadora de Tributos',
    'calculator.subtitle': 'Estime os custos de importação: II, IPI, PIS, COFINS, ICMS e taxas.',
    'calculator.ncm': 'Código NCM',
    'calculator.ncm.placeholder': 'Ex: 8471.30.12',
    'calculator.value': 'Valor FOB (USD)',
    'calculator.value.placeholder': 'Ex: 10000',
    'calculator.freight': 'Frete Internacional (USD)',
    'calculator.insurance': 'Seguro Internacional (USD)',
    'calculator.state': 'Estado de Destino',
    'calculator.calculate': 'Calcular',
    'calculator.results': 'Resultado da Simulação',
    'calculator.breakdown': 'Detalhamento',
    'calculator.tax.ii': 'Imposto de Importação (II)',
    'calculator.tax.ipi': 'IPI',
    'calculator.tax.pis': 'PIS-Importação',
    'calculator.tax.cofins': 'COFINS-Importação',
    'calculator.tax.icms': 'ICMS',
    'calculator.tax.siscomex': 'Taxa SISCOMEX',
    'calculator.tax.afrmm': 'AFRMM',
    'calculator.total': 'Total Estimado',
    'calculator.disclaimer': 'Valores estimados. Consulte nossos especialistas para cálculo preciso com base na legislação vigente.',

    // Blog
    'blog.title': 'Blog & Insights',
    'blog.subtitle': 'Conteúdo técnico sobre comércio exterior, legislação aduaneira e estratégias tributárias.',
    'blog.readMore': 'Ler artigo',
    'blog.categories': 'Legislação|Tributário|Logística|Tecnologia|Casos de Sucesso',

    // Contact
    'contact.title': 'Fale Conosco',
    'contact.subtitle': 'Preencha o formulário ou chame no WhatsApp. Respondemos em até 2 horas úteis.',
    'contact.name': 'Nome completo',
    'contact.email': 'E-mail corporativo',
    'contact.phone': 'Telefone/WhatsApp',
    'contact.company': 'Empresa',
    'contact.service': 'Serviço de interesse',
    'contact.message': 'Mensagem',
    'contact.submit': 'Enviar Mensagem',
    'contact.whatsapp': 'WhatsApp Direto',
    'contact.whatsapp.text': 'Clique para conversar agora',
    'contact.success': 'Mensagem enviada com sucesso! Retornaremos em breve.',
    'contact.error': 'Erro ao enviar. Tente novamente ou chame no WhatsApp.',

    // Footer
    'footer.tagline': 'Inteligência aduaneira para seu negócio global.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.lgpd': 'LGPD',

    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.retry': 'Tentar novamente',
    'common.back': 'Voltar',
    'common.next': 'Próximo',
    'common.previous': 'Anterior',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.language': 'Language',

    // Hero
    'hero.title': 'Foreign Trade Specialists',
    'hero.subtitle': 'We simplify your import and export operations with customs intelligence, compliance, and cost reduction.',
    'hero.cta.primary': 'Talk to a Specialist',
    'hero.cta.secondary': 'Our Services',
    'hero.stats.projects': 'Projects Delivered',
    'hero.stats.clients': 'Active Clients',
    'hero.stats.countries': 'Countries Served',
    'hero.stats.savings': 'Average Savings',

    // About
    'about.title': 'About Us',
    'about.subtitle': 'We transform customs complexity into competitive advantage for your business.',
    'about.description1': 'With over 15 years of experience in foreign trade, we help companies of all sizes navigate the complexities of international operations. Our multidisciplinary team combines legal, tax, and logistics expertise to deliver measurable results.',
    'about.description2': 'We believe compliance is not a cost — it is an investment. Every process we optimize, every classification we review, every special regime we implement generates real savings and legal certainty for your operation.',
    'about.mission': 'Mission',
    'about.mission.text': 'Facilitate Brazilian international trade with technical excellence and ethics.',
    'about.vision': 'Vision',
    'about.vision.text': 'Be the reference in customs intelligence in Latin America by 2030.',
    'about.values': 'Values',
    'about.values.list': 'Integrity above all|Continuous technical excellence|Long-term partnership|Innovation with responsibility',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete solutions for the entire foreign trade chain',
    'services.import.title': 'Import',
    'services.import.desc': 'Complete management: licensing, tax classification (NCM), special regimes, drawback, ex-tariff, and customs clearance.',
    'services.export.title': 'Export',
    'services.export.desc': 'Tax planning, RADAR qualification, certificate of origin, Drawback, special customs regimes, and international logistics.',
    'services.classification.title': 'Tax Classification (NCM)',
    'services.classification.desc': 'Technical analysis of tax classification, NCM review, classification queries, and defense in audits.',
    'services.regimes.title': 'Special Customs Regimes',
    'services.regimes.desc': 'Drawback, Customs Warehouse, RECOF, RECOF-SPED, Temporary Admission, Certified Customs Warehouse (DAC).',
    'services.compliance.title': 'Customs Compliance',
    'services.compliance.desc': 'Process auditing, due diligence, OEA Program, risk management, training, and internal controls implementation.',
    'services.consulting.title': 'International Tax Consulting',
    'services.consulting.desc': 'Corporate structure planning, double taxation treaties, transfer pricing, international VAT, and tax burden optimization.',

    // Calculator
    'calculator.title': 'Tax Calculator',
    'calculator.subtitle': 'Estimate import costs: II, IPI, PIS, COFINS, ICMS, and fees.',
    'calculator.ncm': 'NCM Code',
    'calculator.ncm.placeholder': 'Ex: 8471.30.12',
    'calculator.value': 'FOB Value (USD)',
    'calculator.value.placeholder': 'Ex: 10000',
    'calculator.freight': 'International Freight (USD)',
    'calculator.insurance': 'International Insurance (USD)',
    'calculator.state': 'Destination State',
    'calculator.calculate': 'Calculate',
    'calculator.results': 'Simulation Results',
    'calculator.breakdown': 'Breakdown',
    'calculator.tax.ii': 'Import Tax (II)',
    'calculator.tax.ipi': 'IPI',
    'calculator.tax.pis': 'PIS-Import',
    'calculator.tax.cofins': 'COFINS-Import',
    'calculator.tax.icms': 'ICMS',
    'calculator.tax.siscomex': 'SISCOMEX Fee',
    'calculator.tax.afrmm': 'AFRMM',
    'calculator.total': 'Estimated Total',
    'calculator.disclaimer': 'Estimated values. Consult our specialists for precise calculation based on current legislation.',

    // Blog
    'blog.title': 'Blog & Insights',
    'blog.subtitle': 'Technical content on foreign trade, customs legislation, and tax strategies.',
    'blog.readMore': 'Read article',
    'blog.categories': 'Legislation|Tax|Logistics|Technology|Case Studies',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Fill out the form or call us on WhatsApp. We respond within 2 business hours.',
    'contact.name': 'Full Name',
    'contact.email': 'Corporate Email',
    'contact.phone': 'Phone/WhatsApp',
    'contact.company': 'Company',
    'contact.service': 'Service of Interest',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.whatsapp': 'Direct WhatsApp',
    'contact.whatsapp.text': 'Click to chat now',
    'contact.success': 'Message sent successfully! We will get back to you shortly.',
    'contact.error': 'Error sending. Please try again or contact us via WhatsApp.',

    // Footer
    'footer.tagline': 'Customs intelligence for your global business.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.lgpd': 'LGPD',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.retry': 'Retry',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
  },
};

export function getTranslation(locale: Locale, key: string): string {
  return translations[locale][key] || key;
}

export function t(locale: Locale) {
  return (key: string) => getTranslation(locale, key);
}