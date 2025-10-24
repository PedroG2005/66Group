import * as React from 'react'; // Adicionado
import Autoplay from 'embla-carousel-autoplay'; // <-- Adicione esta importação de volta
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Definições de dados (como estavam no seu código original)
const heroHighlights = [
  { value: '20+', label: 'anos acelerando decisões estratégicas' },
  { value: '150+', label: 'projetos transformadores entregues' },
  { value: '5', label: 'unidades de negócios integradas' },
];

const culturePillars = [
  {
    title: 'Compromisso',
    description:
      'Construímos relações de confiança pautadas em ética, entrega consistente e parceria genuína.',
  },
  {
    title: 'Inteligência',
    description:
      'Operamos com leitura de dados, planejamento e criatividade para antecipar o movimento do mercado.',
  },
  {
    title: 'Resultados',
    description:
      'Nosso foco está em gerar impacto mensurável e crescimento sustentável para clientes e stakeholders.',
  },
];

const businessUnits = [
  {
    name: 'RECUP',
    description:
      'A RECUP Consultoria & Assessoria Empresarial atua com equipes multidisciplinares para diagnosticar cenários, identificar ajustes estratégicos e direcionar o crescimento de empresas com precisão administrativa, comercial e jurídica.',
    link: '#',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 3l9 4.5-9 4.5L3 7.5 12 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M21 10.5v6a2 2 0 01-1.106 1.789l-7 3.5a2 2 0 01-1.788 0l-7-3.5A2 2 0 013 16.5v-6"
        />
      </svg>
    ),
  },
  {
    name: 'MÍDIA FUTURA',
    description:
      'Comunicação que gera reputação e relacionamento. A Mídia Futura conecta estratégia, eventos, marketing e consultoria para posicionar marcas e criar experiências memoráveis.',
    link: '#',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: 'VIA BENEFÍCIOS',
    description:
      'Gestão completa de benefícios corporativos com planos de saúde, odontológicos, seguros e assistências que fortalecem o cuidado com colaboradores e parceiros.',
    link: '#',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    name: 'ALMA/AGE',
    description:
      'Agência com DNA consultivo que mergulha na realidade dos clientes para construir narrativas relevantes, campanhas de alta performance e relações que perduram.',
    link: '#',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
        />
      </svg>
    ),
  },
  {
    name: 'DUBBOX',
    description:
      'O braço tecnológico do ecossistema. A DUBBOX transforma dados em inteligência aplicada, entregando dashboards claros e insights para decisões em tempo real.',
    link: '#',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 9h6v6H9z" />
      </svg>
    ),
  },
];

const partnerLogos = [
  'Parceiro 01',
  'Parceiro 02',
  'Parceiro 03',
  'Parceiro 04',
  'Parceiro 05',
  'Parceiro 06',
];

const contactDetails = [
  { // <-- NOVO ITEM WHATSAPP ADICIONADO AQUI
    title: 'WhatsApp',
    value: '(61) 3445-3406',
    helper: 'Inicie uma conversa direta',
    href: 'https://wa.me/556134453406', // Link para WhatsApp (ajuste o número se necessário)
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
         <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'contato@66group.com',
    helper: 'Responderemos em até 1 dia útil',
    href: 'mailto:contato@66group.com',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          d="M21 8l-9 5-9-5m18 0l-9-5-9 5m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
        />
      </svg>
    ),
  },
  {
    title: 'Endereço',
    value: 'Platinum Office, sala 225 • SIG • Brasília/DF',
    helper: 'Visite-nos com horário agendado',
    // href removido pois não há link direto para endereço
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          d="M12 11a3 3 0 100-6 3 3 0 000 6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          d="M19.5 10.5c0 7-7.5 11.5-7.5 11.5S4.5 17.5 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden bg-slate-950 text-white section-padding"
        >
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-red-500/30 blur-3xl" />
            <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-red-700/20 blur-[180px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18)_0%,_rgba(15,23,42,0)_55%)]" />
          </div>

          <div className="container relative z-10">
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_minmax(0,0.95fr)]">
              <div className="space-y-10">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-slate-200">
                  Ecossistema 66 Group
                </span>
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
                    Soluções integradas para negócios que precisam ir além da próxima meta.
                  </h1>
                  <p className="text-lg leading-relaxed text-slate-200 md:text-xl">
                    Transformamos desafios corporativos em novas oportunidades com estratégia,
                    criatividade e tecnologia. Unimos especialistas de diferentes frentes para
                    construir jornadas sob medida do diagnóstico ao resultado mensurável.
                  </p>
                </div>
                {/* Ajustado container e botões para responsividade */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4"> {/* Alterado para flex-col por padrão, sm:flex-row */}
                  <a
                    href="#contato"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-3 text-base font-semibold tracking-wide text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 text-center" // Adicionado w-full sm:w-auto text-center
                  >
                    Fale com nossos especialistas
                  </a>
                  <a
                    href="#negocios"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 text-center" // Adicionado w-full sm:w-auto text-center
                  >
                    Conheça o ecossistema
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                  {heroHighlights.map((item) => (
                    // Adicionado text-center sm:text-left aqui
                    <div key={item.value} className="space-y-1.5 text-center sm:text-left">
                      <span className="text-3xl font-semibold text-white md:text-4xl">
                        {item.value}
                      </span>
                      <p className="text-sm leading-relaxed text-slate-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-10 backdrop-blur-xl shadow-[0_25px_80px_-45px_rgba(248,250,252,0.65)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-200">
                    Credibilidade
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold text-white">
                    Estratégia, cultura e execução conectadas por uma mesma visão.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200">
                    A base do 66 Group está em nossas raízes sólidas: um compromisso genuíno com
                    quem somos e com a transformação que entregamos. Cada decisão é guiada por
                    valores que fortalecem clientes, parceiros e colaboradores.
                  </p>
                  <ul className="mt-8 space-y-4 text-sm text-slate-100">
                    {[
                      'Times especializados em negócios, comunicação, tecnologia e benefícios.',
                      'Metodologias orientadas por dados e insights reais de mercado.',
                      'Governança compartilhada para decisões ágeis e responsáveis.',
                    ].map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-200">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.8}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="flex-1 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Somos */}
        <section id="quem-somos" className="relative bg-white">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_#f1f5f90,_rgba(241,245,249,0)_65%)]" />
          <div className="container relative section-padding">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-red-600">
                Quem somos
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-[2.75rem]">
                As raízes do 66 Group sustentam um ecossistema que cresce com consistência.
              </h2>
            </div>

            <div className="mt-12 grid gap-16 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-center">
              <div className="space-y-6 text-base leading-relaxed text-slate-600 md:text-lg">
                <p>
                  Toda raiz tem uma razão básica: <strong className="text-slate-900">fixação</strong>.
                  Ela sustenta o tronco para que a árvore gere flores e frutos. Muitas vezes invisível,
                  mas indispensável, é ela que permite que a vida floresça acima da superfície.
                </p>
                <p>
                  A raiz é o <strong className="text-slate-900">princípio de tudo</strong>. Fornece
                  água, vitaminas, estabilidade. Não determina a direção do crescimento, mas garante que
                  ele aconteça de forma saudável.
                </p>
                <p>
                  A cultura do 66 Group funciona como essa raiz: sólida, resiliente e comprometida com
                  quem somos e onde queremos chegar. É ela que sustenta nossos clientes, parceiros e
                  colaboradores na busca por novos resultados.
                </p>

                <div className="grid gap-6 pt-4 sm:grid-cols-3">
                  {culturePillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-red-200"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-sm font-semibold text-red-600">
                        {pillar.title.slice(0, 1)}
                      </span>
                      <p className="mt-4 text-base font-semibold text-slate-900">{pillar.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-9">
                {/* Estilo ajustado para card neutro sobre fundo branco */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-foreground shadow-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    Nossa visão
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Acreditamos que o crescimento verdadeiro gera valor compartilhado, beneficiando todo o ecossistema — clientes, parceiros e comunidade.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    Nossa cultura forte garante que cada movimento esteja conectado ao propósito de entregar resultados reais e significativos ao mercado.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
                  {/* Grid ajustado: 1 coluna por padrão, 2 colunas em telas sm e maiores */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { value: '66', label: 'anos de experiência somada' },
                      { value: '120+', label: 'clientes e parceiros ativos' },
                      { value: '30+', label: 'projetos em andamento' },
                      { value: '5', label: 'unidades operando em sinergia' },
                    ].map((item) => (
                      // Opcional: Centralizar texto em telas pequenas
                      <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center sm:text-left">
                        <span className="text-2xl font-semibold text-slate-900">{item.value}</span>
                        <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Nossos Negócios - TRANSFORMADO EM CARROSSEL */}
       <section id="negocios" className="relative overflow-hidden bg-slate-950 text-white">
          {/* ... (Divs de fundo absoluto permanecem iguais) ... */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.12),_rgba(15,23,42,0)_60%)]" />
            <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-red-600/20 blur-[140px]" />
          </div>

          <div className="container relative section-padding">
            {/* ... (Título e descrição da seção permanecem iguais) ... */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center justify-center rounded-full border border-red-400/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-red-200">
                Negócios 66 Group
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
                Um ecossistema completo para impulsionar resultados de ponta a ponta.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-200 md:text-lg">
                Cada unidade entrega excelência na sua especialidade, atuando em colaboração para gerar
                valor estratégico em todos os pontos de contato da jornada corporativa.
              </p>
            </div>

            {/* Início do Carrossel */}
            <Carousel
            plugins={[ // <--- Adiciona esta prop de volta
              Autoplay({
                delay: 3000, // Tempo em milissegundos (3 segundos)
                stopOnInteraction: false, // Para ao interagir manualmente
                stopOnMouseEnter: true, // Para quando o mouse está sobre o carousel
              }),
            ]}
              opts={{
                align: 'start', // Mantém a opção de alinhamento
                loop: true,     // <--- Adiciona esta linha
              }}
              // Ajusta a largura e centraliza. Modifique max-w-* conforme necessário.
              className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-16"
            >
              <CarouselContent className="-ml-4"> {/* Ajuste de margem padrão */}
                {businessUnits.map((business) => (
                  // Define 1 item em mobile, 2 em lg+
                  <CarouselItem key={business.name} className="pl-4 lg:basis-1/2">
                    <div className="p-1 h-full"> {/* Padding para evitar corte de sombra/hover e garantir altura */}
                      {/* Conteúdo original do Article */}
                      <article
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col" // Adicionado h-full e flex flex-col
                      >
                        <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-gradient-to-br group-hover:from-red-500/15 group-hover:via-transparent group-hover:to-white/10" />
                        <div className="relative flex flex-col gap-6 h-full"> {/* Adicionado h-full */}
                          <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-red-500/20 text-red-200"> {/* Adicionado flex-shrink-0 */}
                              {business.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-white">{business.name}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-200 flex-grow">{business.description}</p> {/* Adicionado flex-grow */}
                          <a
                            href={business.link}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-red-200 transition-colors hover:text-white mt-auto" // Adicionado mt-auto para empurrar para baixo
                          >
                            Saiba mais
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </article>
                      {/* Fim do Conteúdo Original */}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Botões de Navegação Manual (posicionados fora) */}
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex text-white hover:bg-white/10 hover:text-white" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex text-white hover:bg-white/10 hover:text-white" />
            </Carousel>
            {/* Fim do Carrossel */}
          </div>
        </section>

        {/* Parceiros */}
        <section id="parceiros" className="relative bg-white">
          <div className="container section-padding">
            <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  Rede de parceiros
                </span>
                <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                  Conexões que ampliam a força das nossas entregas.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {partnerLogos.map((partner) => (
                <div
                  key={partner}
                  className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 text-center text-sm font-semibold text-slate-500 shadow-sm transition-all duration-300 hover:border-red-200 hover:text-red-600"
                >
                  {partner}
                </div>
              ))}
            </div>

           {/* Estilo ajustado para um visual mais neutro */}
           <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-gray-50 px-8 py-10 text-center shadow-md md:flex-row md:items-center md:justify-between md:text-left">
              <div>
                {/* Título "Seja parceiro" usando a cor primária (vermelho) */}
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Seja parceiro</p>
                {/* Texto principal com cor secundária/muted */}
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Junte-se à nossa rede para cocriar soluções com alto valor agregado.
                </p>
              </div>
              {/* Botão vermelho mantido como CTA */}
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-red-400/40 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-red-500"
              >
                conversar com o 66 group
              </a>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white"
        >
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-500/30 blur-[140px]" />
            <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-red-600/20 blur-[160px]" />
          </div>

          <div className="container relative section-padding">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_minmax(0,1.15fr)]">
              <div className="space-y-8">
                <span className="inline-flex rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Fale conosco
                </span>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  Pronto para transformar o seu desafio em um novo capítulo de crescimento?
                </h2>
                <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                  Conte como podemos ajudar. Nosso time retorna rapidamente com os melhores caminhos
                  e especialistas para a sua necessidade.
                </p>

                <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-lg">
                  {contactDetails.map((detail) => (
                    // Ajustado para flex-col e centralizado por padrão, flex-row e alinhado ao topo em telas sm+
                    <div key={detail.title} className="flex flex-col items-center text-center gap-2 sm:flex-row sm:items-start sm:text-left sm:gap-4">
                      {/* Ícone: Mantido tamanho fixo */}
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-200">
                        {detail.icon}
                      </span>
                      {/* Container do texto */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                          {detail.title}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target="_blank" // Adicionado target blank se ainda não estiver
                            rel="noopener noreferrer" // Adicionado rel
                            className="mt-1 block text-lg font-semibold text-white transition-colors hover:text-red-200"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-lg font-semibold text-white">{detail.value}</p>
                        )}
                        {detail.helper && (
                          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                            {detail.helper}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

             {/* Padding ajustado: p-6 por padrão (telas pequenas), p-10 em sm+ */}
             <form className="space-y-6 rounded-3xl bg-white p-6 sm:p-10 shadow-2xl">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-red-300 focus:outline-none focus:ring-4 focus:ring-red-100"
                    required
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-red-300 focus:outline-none focus:ring-4 focus:ring-red-100"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(61) 99999-9999"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-red-300 focus:outline-none focus:ring-4 focus:ring-red-100"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Assunto
                  </label>
                  <input
                    type="text"
                    placeholder="Como podemos ajudar?"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-red-300 focus:outline-none focus:ring-4 focus:ring-red-100"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Conte detalhes sobre o seu desafio..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-red-300 focus:outline-none focus:ring-4 focus:ring-red-100"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-red-400/40 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-red-500"
                >
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>
            <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.230053898836!2d-47.91287872402553!3d-15.791819022893344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a88fa8fad13%3A0x9a20b86b2e486332!2sPlatinum%20Office!5e0!3m2!1spt-BR!2sbr!4v1761331661994!5m2!1spt-BR!2sbr" // <-- SUBSTITUA PELA URL COPIADA
                width="100%" // Garante largura total
                height="450" // Altura do mapa (ajuste conforme necessário)
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da 66 Group no Google Maps"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* BOTÃO FIXO DO WHATSAPP */}
      <a
        href="https://wa.me/556134453406" // Link do WhatsApp (use o número correto com código do país)
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        {/* Ícone do WhatsApp */}
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
      {/* FIM DO BOTÃO FIXO DO WHATSAPP */}

      <Footer />
    </div>
  );
}