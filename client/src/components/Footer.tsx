import { Link } from 'wouter';

const quickLinks = [
  { href: '#home', label: 'Início' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#negocios', label: 'Nossos Negócios' },
  { href: '#parceiros', label: 'Parceiros' },
  { href: '#contato', label: 'Contato' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#', // Mantenha '#' ou coloque o link real
    icon: (
      // Ícone do Facebook
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram', // Mantido
    href: '#', // Mantenha '#' ou coloque o link real
    icon: (
      // Ícone do Instagram (CORRIGIDO)
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A4 4 0 0 0 4 7.8v8.4c0 2.2 1.8 4 4 4h8.4c2.2 0 4-1.8 4-4V7.8c0-2.2-1.8-4-4-4H7.6zm9.65 1.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#', // Mantenha '#' ou coloque o link real
    icon: (
      // Ícone do X (Twitter)
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-28 -left-24 h-64 w-64 rounded-full bg-red-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-600/20 blur-[140px]" />
      </div>

      <div className="container relative py-16 md:py-20 lg:py-24">
        {/* Adicionado text-center lg:text-left para centralizar em mobile */}
        <div className="grid gap-12 text-center lg:text-left lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
          {/* Adicionado flex flex-col items-center lg:items-start para centralizar logo/texto em mobile */}
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <Link href="/">
              <a className="group inline-flex items-center gap-3">
                <div className="rounded-2xl p-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <img src="/logo-66group.png" alt="66 Group Logo" className="h-10 w-auto" />
                </div>
                {/* Removido o div vazio aqui */}
              </a>
            </Link>

            <p className="max-w-lg text-sm leading-relaxed text-slate-300">
              Somos um hub estratégico que une consultoria, comunicação, tecnologia e benefícios para
              transformar desafios corporativos em resultados sustentáveis.
            </p>

            {/* Adicionado justify-center lg:justify-start para centralizar ícones em mobile */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:border-red-300/50 hover:text-red-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Grid de links/contato já centraliza texto por causa do text-center no pai */}
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-200">
                Navegue
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition-colors duration-200 hover:text-white hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-200">
                Contato direto
              </h4>
              {/* Adicionado flex flex-col items-center lg:items-start para centralizar contatos em mobile */}
              <div className="space-y-4 text-sm text-slate-300 flex flex-col items-center lg:items-start">
              <a
                  href="https://wa.me/556134453406"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Ajustado para flex e centralizado em mobile, alinhado à esquerda em lg
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-white w-fit lg:w-auto"
                >
                  <svg className="h-4 w-4 text-red-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  (61) 3445-3406
                </a>
                <a
                  href="mailto:contato@66group.com"
                  // Ajustado para flex e centralizado em mobile, alinhado à esquerda em lg
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-white w-fit lg:w-auto"
                >
                  <svg className="h-5 w-5 text-red-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M21 8l-9 5-9-5m18 0l-9-5-9 5m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
                    />
                  </svg>
                  contato@66group.com
                </a>
                {/* Ajustado para flex e centralizado em mobile, alinhado à esquerda em lg */}
                <p className="flex items-start gap-3 leading-relaxed w-fit lg:w-auto">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 11a3 3 0 100-6 3 3 0 000 6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M19.5 10.5c0 7-7.5 11.5-7.5 11.5S4.5 17.5 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {/* Mantido o <br /> para quebra de linha do endereço */}
                  <span> {/* Envolvido em span para o text-center/lg:text-left funcionar corretamente */}
                    Platinum Office, sala 225<br />
                    SIG • Brasília/DF
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright centralizado */}
        <div className="mt-16 w-full border-t border-white/10 pt-8 text-xs uppercase tracking-[0.3em] text-slate-400 flex items-center justify-center">
          <p className="text-center">&copy; {currentYear} 66 Group. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}