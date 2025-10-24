import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/logo-66group.png"
              alt="66 Group Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm opacity-80">
              Excelência em gestão empresarial e soluções estratégicas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#grupo" className="hover:text-primary transition-colors">
                  O Grupo
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-primary transition-colors">
                  Empresas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+551199999999"
                  className="hover:text-primary transition-colors"
                >
                  +55 (11) 9999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@66group.com.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@66group.com.br
                </a>
              </li>
              <li className="text-sm">
                Av. Exemplo, 666 - Sala 66<br />
                São Paulo/SP
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.594.147-1.065.42-1.54.897-.475.475-.75.946-.897 1.54-.266.788-.467 1.658-.527 2.936C.038 8.333.015 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.527 2.936.147.593.422 1.065.897 1.539.475.476.946.75 1.54.897.788.266 1.658.467 2.936.527C8.333 23.962 8.74 23.985 12 23.985s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.527.593-.147 1.065-.422 1.539-.897.476-.475.75-.946.897-1.54.266-.788.467-1.658.527-2.936.035-.68.048-1.087.048-3.947s-.015-3.267-.072-4.947c-.06-1.277-.261-2.148-.527-2.936-.147-.593-.422-1.065-.897-1.539-.475-.476-.946-.75-1.54-.897-.788-.266-1.658-.467-2.936-.527C15.667.048 15.26.035 12 .035zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.56.217.96.477 1.382.896.419.42.679.822.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.56-.477.96-.896 1.382-.42.419-.822.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.822-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.56.477-.96.896-1.382.42-.419.822-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {currentYear} 66 Group. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

