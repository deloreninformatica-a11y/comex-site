import type { Locale } from './i18n';

export interface BlogPost {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, string>;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'drawback-suspensao-isencao',
    title: {
      pt: 'Drawback: Suspensão vs Isenção - Qual Escolher?',
      en: 'Drawback: Suspension vs Exemption - Which to Choose?',
    },
    excerpt: {
      pt: 'Entenda as diferenças entre os regimes de drawback suspensão e isenção, e saiba qual se aplica melhor à sua operação de exportação.',
      en: 'Understand the differences between drawback suspension and exemption regimes, and know which best applies to your export operation.',
    },
    content: {
      pt: `
        <h2>Introdução</h2>
        <p>O drawback é um dos regimes aduaneiros mais importantes para empresas exportadoras brasileiras. Ele permite a desoneração de tributos incidentes sobre insumos importados ou adquiridos no mercado interno, destinados à produção de produtos para exportação.</p>

        <h2>Drawback Suspensão</h2>
        <p>No regime de <strong>suspensão</strong>, os tributos são suspensos no momento da importação ou aquisição dos insumos. A empresa tem o compromisso de exportar o produto final dentro do prazo estabelecido no ato concessório.</p>
        <ul>
          <li>Tributos suspensos: II, IPI, PIS-Importação, COFINS-Importação, ICMS (em alguns estados)</li>
          <li>Prazo padrão: 1 ano, prorrogável por mais 1 ano</li>
          <li>Exige garantia (caução ou fiança bancária)</li>
          <li>Ideal para empresas com fluxo de exportação constante</li>
        </ul>

        <h2>Drawback Isenção</h2>
        <p>No regime de <strong>isenção</strong>, a empresa já pagou os tributos na importação/aquisição dos insumos e solicita a restituição (crédito) após a exportação do produto final.</p>
        <ul>
          <li>Tributos restituídos: II, IPI, PIS-Importação, COFINS-Importação</li>
          <li>Não exige garantia prévia</li>
          <li>Prazo para apresentação do pedido: até 5 anos após a exportação</li>
          <li>Ideal para exportações eventuais ou quando não há previsibilidade</li>
        </ul>

        <h2>Qual Escolher?</h2>
        <p>A escolha depende do perfil da sua operação:</p>
        <table>
          <thead>
            <tr><th>Critério</th><th>Suspensão</th><th>Isenção</th></tr>
          </thead>
          <tbody>
            <tr><td>Fluxo de caixa</td><td>Preserva caixa (não paga na entrada)</td><td>Exige caixa para pagar na entrada</td></tr>
            <tr><td>Previsibilidade</td><td>Alta (exportação programada)</td><td>Baixa/Média</td></tr>
            <tr><td>Garantia</td><td>Exigida</td><td>Não exigida</td></tr>
            <tr><td>Complexidade</td><td>Maior (controle de estoque, prorrogações)</td><td>Menor</td></tr>
          </tbody>
        </table>

        <h2>Conclusão</h2>
        <p>Empresas com exportações recorrentes e previsíveis geralmente se beneficiam mais da <strong>suspensão</strong>. Já operações eventuais ou sem previsibilidade de prazo podem optar pela <strong>isenção</strong>. Em muitos casos, é possível utilizar ambos os regimes de forma complementar.</p>
        <p><strong>Recomendação:</strong> Consulte um especialista para analisar seu caso específico e montar a estratégia mais vantajosa.</p>
      `,
      en: `
        <h2>Introduction</h2>
        <p>Drawback is one of the most important customs regimes for Brazilian exporting companies. It allows the exemption of taxes on inputs imported or acquired in the domestic market, destined for the production of goods for export.</p>

        <h2>Drawback Suspension</h2>
        <p>In the <strong>suspension</strong> regime, taxes are suspended at the time of import or acquisition of inputs. The company commits to exporting the final product within the deadline established in the concession act.</p>
        <ul>
          <li>Suspended taxes: II, IPI, PIS-Import, COFINS-Import, ICMS (in some states)</li>
          <li>Standard term: 1 year, extendable for 1 more year</li>
          <li>Requires guarantee (collateral or bank guarantee)</li>
          <li>Ideal for companies with constant export flow</li>
        </ul>

        <h2>Drawback Exemption</h2>
        <p>In the <strong>exemption</strong> regime, the company has already paid taxes on the import/acquisition of inputs and requests restitution (credit) after exporting the final product.</p>
        <ul>
          <li>Restituted taxes: II, IPI, PIS-Import, COFINS-Import</li>
          <li>No prior guarantee required</li>
          <li>Deadline for filing request: up to 5 years after export</li>
          <li>Ideal for occasional exports or when there's no predictability</li>
        </ul>

        <h2>Which to Choose?</h2>
        <p>The choice depends on your operation profile:</p>
        <table>
          <thead>
            <tr><th>Criterion</th><th>Suspension</th><th>Exemption</th></tr>
          </thead>
          <tbody>
            <tr><td>Cash flow</td><td>Preserves cash (doesn't pay at entry)</td><td>Requires cash to pay at entry</td></tr>
            <tr><td>Predictability</td><td>High (scheduled export)</td><td>Low/Medium</td></tr>
            <tr><td>Guarantee</td><td>Required</td><td>Not required</td></tr>
            <tr><td>Complexity</td><td>Higher (inventory control, extensions)</td><td>Lower</td></tr>
          </tbody>
        </table>

        <h2>Conclusion</h2>
        <p>Companies with recurring and predictable exports usually benefit more from <strong>suspension</strong>. Occasional operations or those without deadline predictability may opt for <strong>exemption</strong>. In many cases, it's possible to use both regimes complementarily.</p>
        <p><strong>Recommendation:</strong> Consult a specialist to analyze your specific case and build the most advantageous strategy.</p>
      `,
    },
    category: 'Legislação',
    date: '2024-03-15',
    readTime: '8 min',
    author: 'Dr. Ricardo Almeida',
  },
  {
    slug: 'classificacao-fiscal-ncm-erros-comuns',
    title: {
      pt: 'Classificação Fiscal NCM: 5 Erros que Custam Caro',
      en: 'NCM Tax Classification: 5 Costly Mistakes',
    },
    excerpt: {
      pt: 'Evite multas e autuações conhecendo os erros mais frequentes na classificação fiscal de mercadorias e como corrigi-los.',
      en: 'Avoid fines and assessments by knowing the most frequent mistakes in goods tax classification and how to fix them.',
    },
    content: {
      pt: `
        <h2>A Importância da Classificação Correta</h2>
        <p>A classificação fiscal pelo código NCM (Nomenclatura Comum do Mercosul) define a alíquota de todos os tributos de importação e exportação. Um erro pode significar pagamento a maior (prejuízo financeiro) ou a menor (risco fiscal).</p>

        <h2>1. Confundir "Partes" com "Acessórios"</h2>
        <p>Muitos classificam acessórios como partes. A diferença: <strong>partes</strong> são essenciais ao funcionamento do bem principal; <strong>acessórios</strong> apenas complementam. A alíquota pode variar significativamente.</p>

        <h2>2. Ignorar a Regra Geral 3 (RG3)</h2>
        <p>Quando uma mercadoria se enquadra em duas ou mais posições, aplica-se a RG3. O erro comum é classificar pela posição que "parece" certa, sem seguir a hierarquia: descrição mais específica > caráter essencial > última posição numérica.</p>

        <h2>3. Não Considerar o Estado da Mercadoria</h2>
        <p>Mercadorias "não montadas", "desmontadas" ou "em kits" têm classificação própria (geralmente mesma posição do produto montado, pela RG2-a). Classificar como partes separadas é erro frequente.</p>

        <h2>4. Usar NCM Genérico para Produtos Específicos</h2>
        <p>Classificar "outras máquinas" (posição residual) quando existe posição específica para o produto. A Receita Federal tem autuado pesadamente isso.</p>

        <h2>5. Não Atualizar NCM Após Alterações Legais</h2>
        <p>A NCM é atualizada anualmente. Continuar usando código extinto ou alterado expõe a empresa a multas por classificação inexata.</p>

        <h2>Como Evitar</h2>
        <ul>
          <li>Realize auditoria periódica de classificação</li>
          <li>Consulte a TIPI (Tabela de Incidência do IPI) e notas explicativas</li>
          <li>Solicite consulta de classificação à RFB quando houver dúvida</li>
          <li>Mantenha documentação técnica dos produtos atualizada</li>
        </ul>
      `,
      en: `
        <h2>The Importance of Correct Classification</h2>
        <p>Tax classification by the NCM code (Mercosur Common Nomenclature) defines the rate of all import and export taxes. An error can mean overpayment (financial loss) or underpayment (tax risk).</p>

        <h2>1. Confusing "Parts" with "Accessories"</h2>
        <p>Many classify accessories as parts. The difference: <strong>parts</strong> are essential to the functioning of the main good; <strong>accessories</strong> only complement it. The rate can vary significantly.</p>

        <h2>2. Ignoring General Rule 3 (GR3)</h2>
        <p>When goods fall under two or more headings, GR3 applies. The common mistake is classifying by the heading that "seems" right, without following the hierarchy: most specific description > essential character > last numerical heading.</p>

        <h2>3. Not Considering the State of Goods</h2>
        <p>"Unassembled", "disassembled" or "kit" goods have their own classification (usually same heading as assembled product, by GR2-a). Classifying as separate parts is a frequent error.</p>

        <h2>4. Using Generic NCM for Specific Products</h2>
        <p>Classifying as "other machines" (residual heading) when a specific heading exists for the product. The Federal Revenue has been heavily auditing this.</p>

        <h2>5. Not Updating NCM After Legal Changes</h2>
        <p>NCM is updated annually. Continuing to use an extinct or altered code exposes the company to fines for incorrect classification.</p>

        <h2>How to Avoid</h2>
        <ul>
          <li>Perform periodic classification audits</li>
          <li>Consult TIPI (IPI Incidence Table) and explanatory notes</li>
          <li>Request classification consultation from RFB when in doubt</li>
          <li>Keep product technical documentation updated</li>
        </ul>
      `,
    },
    category: 'Tributário',
    date: '2024-02-28',
    readTime: '6 min',
    author: 'Dra. Marina Santos',
  },
  {
    slug: 'oea-operador-economico-autorizado',
    title: {
      pt: 'OEA: Como Obter a Certificação de Operador Econômico Autorizado',
      en: 'AEO: How to Obtain Authorized Economic Operator Certification',
    },
    excerpt: {
      pt: 'Passo a passo para certificar sua empresa no programa OEA da Receita Federal e ganhar benefícios como canal verde prioritário e redução de custos logísticos.',
      en: 'Step-by-step to certify your company in the Federal Revenue AEO program and gain benefits like priority green channel and reduced logistics costs.',
    },
    content: {
      pt: `
        <h2>O que é o OEA?</h2>
        <p>O <strong>Operador Econômico Autorizado (OEA)</strong> é um programa da Receita Federal que certifica empresas com alto nível de compliance aduaneiro, concedendo benefícios operacionais significativos.</p>

        <h2>Benefícios Principais</h2>
        <ul>
          <li><strong>Canal Verde Prioritário:</strong> Desembaraço automático na maioria das operações</li>
          <li><strong>Redução de inspeção física:</strong> Menos de 1% das cargas inspecionadas</li>
          <li><strong>Prioridade em filas:</strong> Em portos, aeroportos e postos de fronteira</li>
          <li><strong>Menos garantias:</strong> Dispensa de caução em regimes especiais</li>
          <li><strong>Reconhecimento internacional:</strong> Acordos de reconhecimento mútuo (Argentina, Chile, EUA, Coreia, China, etc.)</li>
        </ul>

        <h2>Requisitos para Certificação</h2>
        <ol>
          <li><strong>Histórico de conformidade:</strong> Mínimo 3 anos de atividade sem infrações graves</li>
          <li><strong>Solidez financeira:</strong> Capacidade de cumprir obrigações tributárias</li>
          <li><strong>Sistema de gestão:</strong> Controles internos de compliance aduaneiro documentados</li>
          <li><strong>Segurança da cadeia logística:</strong> Padrões de segurança (baseados na norma ISO 28000)</li>
          <li><strong>Procedimentos de contingência:</strong> Planos para situações de emergência</li>
        </ol>

        <h2>Processo de Certificação</h2>
        <ol>
          <li><strong>Autoavaliação:</strong> Preencher questionário de conformidade no Portal Único</li>
          <li><strong>Implementação de gaps:</strong> Corrigir não-conformidades identificadas</li>
          <li><strong>Solicitação formal:</strong> Protocolar pedido no Siscomex</li>
          <li><strong>Validação documental:</strong> Análise pela RFB (até 90 dias)</li>
          <li><strong>Visita in loco:</strong> Auditoria física nas instalações</li>
          <li><strong>Certificação:</strong> Emissão do certificado OEA (válido por 3 anos)</li>
        </ol>

        <h2>Dicas Práticas</h2>
        <p>Comece mapeando todos os seus processos aduaneiros. Documente procedimentos, treine a equipe e implemente controles de risco. O investimento médio de preparação é de 6 a 12 meses, mas o ROI em agilidade e redução de custos compensa.</p>
      `,
      en: `
        <h2>What is AEO?</h2>
        <p>The <strong>Authorized Economic Operator (AEO)</strong> is a Federal Revenue program that certifies companies with a high level of customs compliance, granting significant operational benefits.</p>

        <h2>Main Benefits</h2>
        <ul>
          <li><strong>Priority Green Channel:</strong> Automatic clearance in most operations</li>
          <li><strong>Reduced physical inspection:</strong> Less than 1% of cargo inspected</li>
          <li><strong>Queue priority:</strong> At ports, airports, and border posts</li>
          <li><strong>Fewer guarantees:</strong> Waiver of collateral in special regimes</li>
          <li><strong>International recognition:</strong> Mutual recognition agreements (Argentina, Chile, USA, Korea, China, etc.)</li>
        </ul>

        <h2>Certification Requirements</h2>
        <ol>
          <li><strong>Compliance history:</strong> Minimum 3 years of activity without serious infractions</li>
          <li><strong>Financial solvency:</strong> Capacity to meet tax obligations</li>
          <li><strong>Management system:</strong> Documented internal customs compliance controls</li>
          <li><strong>Supply chain security:</strong> Security standards (based on ISO 28000)</li>
          <li><strong>Contingency procedures:</strong> Plans for emergency situations</li>
        </ol>

        <h2>Certification Process</h2>
        <ol>
          <li><strong>Self-assessment:</strong> Complete compliance questionnaire on Portal Único</li>
          <li><strong>Gap implementation:</strong> Correct identified non-conformities</li>
          <li><strong>Formal request:</strong> File petition in Siscomex</li>
          <li><strong>Document validation:</strong> Analysis by RFB (up to 90 days)</li>
          <li><strong>On-site visit:</strong> Physical audit at facilities</li>
          <li><strong>Certification:</strong> AEO certificate issuance (valid for 3 years)</li>
        </ol>

        <h2>Practical Tips</h2>
        <p>Start by mapping all your customs processes. Document procedures, train your team, and implement risk controls. Average preparation investment is 6 to 12 months, but the ROI in agility and cost reduction pays off.</p>
      `,
    },
    category: 'Compliance',
    date: '2024-01-20',
    readTime: '10 min',
    author: 'Dr. Carlos Mendes',
  },
  {
    slug: 'ex-tarifario-reducao-ii',
    title: {
      pt: 'Ex-Tarifário: Como Reduzir o Imposto de Importação a Zero',
      en: 'Ex-Tariff: How to Reduce Import Tax to Zero',
    },
    excerpt: {
      pt: 'Entenda o mecanismo de ex-tarifário para bens de capital e informática (BK e BI) sem produção nacional equivalente e como solicitar a redução do II para 0%.',
      en: 'Understand the ex-tariff mechanism for capital goods and IT goods (BK and BI) without equivalent domestic production and how to request II reduction to 0%.',
    },
    content: {
      pt: `
        <h2>O que é Ex-Tarifário?</h2>
        <p>O <strong>ex-tarifário</strong> é uma redução temporária da alíquota do Imposto de Importação (II) para <strong>0%</strong>, aplicável a Bens de Capital (BK) e Bens de Informática e Telecomunicação (BIT) que não tenham produção nacional equivalente.</p>

        <h2>Requisitos</h2>
        <ul>
          <li>Produto classificado como BK (NCM capítulo 84, 85, 90) ou BIT</li>
          <li>Não haver produção nacional equivalente (consulta ao MDIC)</li>
          <li>Destinação ao ativo imobilizado da empresa (BK) ou uso em infraestrutura tecnológica (BIT)</li>
        </ul>

        <h2>Processo de Solicitação</h2>
        <ol>
          <li>Verificar se o produto já tem ex-tarifário vigente (consulta no Portal Único/Gecex)</li>
          <li>Se não houver, protocolar pleito no Sistema Eletrônico de Informações (SEI) do MDIC</li>
          <li>Anexar: descrição técnica detalhada, catálogos, fotos, declaração de inexistência de similar nacional</li>
          <li>Acompanhar análise pela Secretaria de Desenvolvimento Industrial (SDI)</li>
          <li>Se deferido, publicar no Diário Oficial da União (portaria Gecex)</li>
        </ul>

        <h2>Prazos e Vigência</h2>
        <ul>
          <li>Análise: média de 60 a 120 dias</li>
          <li>Vigência: geralmente 2 anos, renovável</li>
          <li>Pode ser revogado se houver início de produção nacional</li>
        </ul>

        <h2>Case: Economia de R$ 2,3 Mi</h2>
        <p>Cliente do setor automotivo importou linha de robótica industrial (NCM 8479.50.00). Alíquota original: 14%. Com ex-tarifário: 0%. Volume: US$ 1,8 mi. Economia direta: ~R$ 2,3 milhões em II.</p>

        <h2>Atenção</h2>
        <p>O ex-tarifário reduz apenas o II. IPI, PIS, COFINS e ICMS mantêm suas alíquotas normais. Planeje o custo total da importação.</p>
      `,
      en: `
        <h2>What is Ex-Tariff?</h2>
        <p>The <strong>ex-tariff</strong> is a temporary reduction of the Import Tax (II) rate to <strong>0%</strong>, applicable to Capital Goods (BK) and Information Technology and Telecommunications Goods (BIT) that do not have equivalent domestic production.</p>

        <h2>Requirements</h2>
        <ul>
          <li>Product classified as BK (NCM chapters 84, 85, 90) or BIT</li>
          <li>No equivalent domestic production (consultation with MDIC)</li>
          <li>Destined for company's fixed assets (BK) or use in technological infrastructure (BIT)</li>
        </ul>

        <h2>Application Process</h2>
        <ol>
          <li>Check if product already has valid ex-tariff (query on Portal Único/Gecex)</li>
          <li>If not, file petition in MDIC's Electronic Information System (SEI)</li>
          <li>Attach: detailed technical description, catalogs, photos, declaration of non-existence of national similar</li>
          <li>Follow analysis by Industrial Development Secretariat (SDI)</li>
          <li>If granted, published in Official Gazette (Gecex ordinance)</li>
        </ol>

        <h2>Deadlines and Validity</h2>
        <ul>
          <li>Analysis: average 60 to 120 days</li>
          <li>Validity: usually 2 years, renewable</li>
          <li>Can be revoked if domestic production starts</li>
        </ul>

        <h2>Case: R$ 2.3 Million Savings</h2>
        <p>Automotive sector client imported industrial robotics line (NCM 8479.50.00). Original rate: 14%. With ex-tariff: 0%. Volume: US$ 1.8M. Direct savings: ~R$ 2.3M in II.</p>

        <h2>Attention</h2>
        <p>Ex-tariff reduces only II. IPI, PIS, COFINS and ICMS maintain their normal rates. Plan the total import cost.</p>
      `,
    },
    category: 'Tributário',
    date: '2023-12-10',
    readTime: '7 min',
    author: 'Dra. Marina Santos',
  },
  {
    slug: 'logistica-internacional-modalidades',
    title: {
      pt: 'Modalidades de Transporte Internacional: Como Escolher a Ideal',
      en: 'International Transport Modalities: How to Choose the Ideal One',
    },
    excerpt: {
      pt: 'Comparativo entre marítimo, aéreo, rodoviário e multimodal. Fatores de decisão: custo, tempo, tipo de carga, Incoterms e riscos.',
      en: 'Comparison between maritime, air, road, and multimodal. Decision factors: cost, time, cargo type, Incoterms, and risks.',
    },
    content: {
      pt: `
        <h2>Visão Geral das Modalidades</h2>
        <p>A escolha do modal de transporte impacta diretamente o custo final da operação (até 30% do valor CIF), o prazo de entrega e a gestão de riscos.</p>

        <h2>1. Transporte Marítimo</h2>
        <ul>
          <li><strong>Custo:</strong> Menor (US$ 0,05-0,15/kg-km)</li>
          <li><strong>Tempo:</strong> 20-45 dias (Ásia-Brasil)</li>
          <li><strong>Capacidade:</strong> Alta (contêineres 20'/40', granéis)</li>
          <li><strong>Ideal para:</strong> Grandes volumes, cargas não perecíveis, commodities</li>
          <li><strong>Incoterms comuns:</strong> FOB, CFR, CIF</li>
        </ul>

        <h2>2. Transporte Aéreo</h2>
        <ul>
          <li><strong>Custo:</strong> Maior (US$ 3-8/kg)</li>
          <li><strong>Tempo:</strong> 3-7 dias</li>
          <li><strong>Capacidade:</strong> Limitada (peso/volume)</li>
          <li><strong>Ideal para:</strong> Alto valor/kg, perecíveis, urgências, peças de reposição</li>
          <li><strong>Incoterms comuns:</strong> CIP, CPT, DAP</li>
        </ul>

        <h2>3. Transporte Rodoviário</h2>
        <ul>
          <li><strong>Custo:</strong> Intermediário</li>
          <li><strong>Tempo:</strong> 5-15 dias (Mercosul)</li>
          <li><strong>Capacidade:</strong> Flexível (carga fracionada, lotação)</li>
          <li><strong>Ideal para:</strong> Mercosul, cargas perigosas, porta a porta</li>
          <li><strong>Incoterms comuns:</strong> DAP, DDP</li>
        </ul>

        <h2>4. Multimodal</h2>
        <p>Combinação de dois ou mais modais sob único conhecimento de embarque (BL multimodal). Responsabilidade única do operador multimodal (NVOCC/OTM).</p>

        <h2>Fatores de Decisão</h2>
        <table>
          <thead><tr><th>Fator</th><th>Peso na Decisão</th></tr></thead>
          <tbody>
            <tr><td>Valor da carga / kg</td><td>Alto → Aéreo</td></tr>
            <tr><td>Urgência</td><td>Crítica → Aéreo</td></tr>
            <tr><td>Volume/Peso total</td><td>Alto → Marítimo</td></tr>
            <tr><td>Natureza da carga</td><td>Perigosa/Perecível → Especializado</td></tr>
            <tr><td>Origem/Destino</td><td>Mercosul → Rodoviário</td></tr>
            <tr><td>Incoterm negociado</td><td>Define responsabilidade e custo</td></tr>
          </tbody>
        </table>

        <h2>Dica de Ouro</h2>
        <p>Sempre simule o <strong>Total Landed Cost</strong> (custo total posto no seu depósito) incluindo: frete + seguro + tributos + taxas portuárias + armazenagem + transporte interno. O modal mais barato no frete nem sempre é o mais barato no total.</p>
      `,
      en: `
        <h2>Overview of Modalities</h2>
        <p>The choice of transport mode directly impacts the final operation cost (up to 30% of CIF value), delivery time, and risk management.</p>

        <h2>1. Maritime Transport</h2>
        <ul>
          <li><strong>Cost:</strong> Lowest (US$ 0.05-0.15/kg-km)</li>
          <li><strong>Time:</strong> 20-45 days (Asia-Brazil)</li>
          <li><strong>Capacity:</strong> High (20'/40' containers, bulk)</li>
          <li><strong>Ideal for:</strong> Large volumes, non-perishable goods, commodities</li>
          <li><strong>Common Incoterms:</strong> FOB, CFR, CIF</li>
        </ul>

        <h2>2. Air Transport</h2>
        <ul>
          <li><strong>Cost:</strong> Highest (US$ 3-8/kg)</li>
          <li><strong>Time:</strong> 3-7 days</li>
          <li><strong>Capacity:</strong> Limited (weight/volume)</li>
          <li><strong>Ideal for:</strong> High value/kg, perishables, urgent, spare parts</li>
          <li><strong>Common Incoterms:</strong> CIP, CPT, DAP</li>
        </ul>

        <h2>3. Road Transport</h2>
        <ul>
          <li><strong>Cost:</strong> Intermediate</li>
          <li><strong>Time:</strong> 5-15 days (Mercosur)</li>
          <li><strong>Capacity:</strong> Flexible (LTL, FTL)</li>
          <li><strong>Ideal for:</strong> Mercosur, dangerous goods, door-to-door</li>
          <li><strong>Common Incoterms:</strong> DAP, DDP</li>
        </ul>

        <h2>4. Multimodal</h2>
        <p>Combination of two or more modes under a single bill of lading (multimodal BL). Single responsibility of multimodal operator (NVOCC/OTM).</p>

        <h2>Decision Factors</h2>
        <table>
          <thead><tr><th>Factor</th><th>Weight in Decision</th></tr></thead>
          <tbody>
            <tr><td>Cargo value / kg</td><td>High → Air</td></tr>
            <tr><td>Urgency</td><td>Critical → Air</td></tr>
            <tr><td>Total Volume/Weight</td><td>High → Maritime</td></tr>
            <tr><td>Cargo nature</td><td>Dangerous/Perishable → Specialized</td></tr>
            <tr><td>Origin/Destination</td><td>Mercosur → Road</td></tr>
            <tr><td>Negotiated Incoterm</td><td>Defines responsibility and cost</td></tr>
          </tbody>
        </table>

        <h2>Golden Tip</h2>
        <p>Always simulate the <strong>Total Landed Cost</strong> (total cost delivered to your warehouse) including: freight + insurance + taxes + port fees + warehousing + inland transport. The cheapest freight mode isn't always the cheapest total.</p>
      `,
    },
    category: 'Logística',
    date: '2023-11-05',
    readTime: '9 min',
    author: 'Eng. Pedro Henrique',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))];
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === current.category)
    .slice(0, limit);
}