import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-24 md:py-32"
        >
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                O Futuro da Gestão Começa Aqui.
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary-foreground/80 mb-8">
                66 Group: Estratégias Sólidas para Resultados Excepcionais.
              </h2>
              <a
                href="#contato"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Conheça Nossas Soluções
              </a>
            </div>
          </div>
        </section>

        {/* O Grupo Section */}
        <section id="grupo" className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="h-1 bg-primary w-16 mb-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  O 66 Group
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O 66 Group é um conglomerado empresarial dinâmico e inovador, dedicado a fornecer soluções estratégicas e operacionais que impulsionam o crescimento e a eficiência de nossos clientes. Com uma visão holística e um compromisso inabalável com a excelência, unimos expertise em diversas áreas para transformar desafios em oportunidades de sucesso duradouro.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa força reside na sinergia de nossas empresas, cada uma líder em seu segmento, trabalhando em conjunto para oferecer um suporte 360º ao seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Empresas Section */}
        <section id="empresas" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <div className="h-1 bg-primary w-16 mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Nossas Unidades de Negócio
              </h2>
              <p className="text-lg text-muted-foreground">
                A força do 66 Group reside na diversidade e especialização de suas unidades de negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 66 Consultoria */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  66 Consultoria
                </h3>
                <p className="text-sm text-muted-foreground mb-3 font-semibold">
                  Consultoria Estratégica e Otimização de Processos
                </p>
                <p className="text-muted-foreground">
                  Especializada em mapeamento, análise e otimização de processos internos. A 66 Consultoria desenha e implementa estratégias que resultam em redução de custos, aumento de produtividade e melhoria contínua da qualidade.
                </p>
              </div>

              {/* 66 Tech */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  66 Tech
                </h3>
                <p className="text-sm text-muted-foreground mb-3 font-semibold">
                  Soluções em Tecnologia e Desenvolvimento de Software
                </p>
                <p className="text-muted-foreground">
                  A vanguarda tecnológica do grupo. A 66 Tech desenvolve plataformas, sistemas customizados e soluções de inteligência de dados, garantindo que nossos clientes estejam sempre à frente no cenário digital.
                </p>
              </div>

              {/* 66 Invest */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  66 Invest
                </h3>
                <p className="text-sm text-muted-foreground mb-3 font-semibold">
                  Gestão de Ativos e Planejamento Financeiro
                </p>
                <p className="text-muted-foreground">
                  Dedicada à gestão prudente e estratégica de capitais. A 66 Invest oferece serviços de planejamento financeiro, análise de mercado e estruturação de investimentos para a maximização do patrimônio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <div className="h-1 bg-primary w-16 mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Nossos Pilares de Atuação
              </h2>
              <p className="text-lg text-muted-foreground">
                Soluções Integradas para o Sucesso do Seu Negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  title: 'Gestão Estratégica',
                  description:
                    'Definição de metas, planejamento de longo prazo e acompanhamento de KPIs.',
                },
                {
                  title: 'Transformação Digital',
                  description:
                    'Implementação de tecnologias disruptivas e migração para ambientes cloud.',
                },
                {
                  title: 'Otimização Operacional',
                  description:
                    'Lean Management, reengenharia de processos e gestão da cadeia de suprimentos.',
                },
                {
                  title: 'Inteligência de Mercado',
                  description:
                    'Análise de dados, big data e relatórios preditivos para tomadas de decisão informadas.',
                },
              ].map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferencial Section */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                O Diferencial 66
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    number: '01',
                    title: 'Visão Integrada',
                    description:
                      'A sinergia entre nossas empresas garante soluções completas e coesas.',
                  },
                  {
                    number: '02',
                    title: 'Foco em Resultados',
                    description:
                      'Nosso sucesso é medido pelo sucesso e crescimento sustentável de nossos clientes.',
                  },
                  {
                    number: '03',
                    title: 'Inovação Constante',
                    description:
                      'Estamos sempre à frente, adotando as melhores práticas e tecnologias do mercado.',
                  },
                  {
                    number: '04',
                    title: 'Profissionalismo e Ética',
                    description:
                      'Conduta transparente e rigorosa em todas as nossas operações.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-secondary font-bold">
                        {item.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="opacity-90">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como o 66 Group pode impulsionar o sucesso da sua empresa.
            </p>
            <a
              href="#contato"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="h-1 bg-primary w-16 mb-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Conecte-se com a Excelência
                </h2>
                <p className="text-lg text-muted-foreground">
                  Estamos prontos para discutir como o 66 Group pode transformar o futuro da sua empresa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: '📞',
                    label: 'Telefone',
                    value: '+55 (11) 9999-9999',
                    href: 'tel:+551199999999',
                  },
                  {
                    icon: '📧',
                    label: 'Email',
                    value: 'contato@66group.com.br',
                    href: 'mailto:contato@66group.com.br',
                  },
                  {
                    icon: '📍',
                    label: 'Endereço',
                    value: 'Av. Exemplo, 666 - Sala 66\nSão Paulo/SP',
                    href: '#',
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-center p-6 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-foreground mb-2">{item.label}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>

              {/* Contact Form */}
              <form className="bg-muted rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(11) 9999-9999"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Descreva sua mensagem aqui..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

