import { useState } from 'react';
import { Link } from 'wouter';

const navLinks = [
  { href: '#home', label: 'INÍCIO' },
  { href: '#quem-somos', label: 'QUEM SOMOS' },
  { href: '#negocios', label: 'NEGÓCIOS' },
  { href: '#parceiros', label: 'PARCEIROS' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-black transition-all">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_rgba(0,0,0,0)_60%)]" />
        <div className="absolute -bottom-12 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-slate-500/15 blur-[120px]" />
      </div>
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 transition-opacity hover:opacity-85">
            <div className="h-8 flex items-center">
              <img
                src="/logo-66group.png"
                alt="66 Group Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </a>
        </Link>
        
        {/* Desktop Navigation - Alterado de 'md:flex' para 'lg:flex' */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-8"> {/* // <-- ALTERADO */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs font-semibold uppercase tracking-[0.35em] text-gray-100 transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-red-500 after:opacity-0 after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* CTA Button - Desktop - Alterado de 'md:' para 'lg:' */}
        <a
          href="#contato"
          className="hidden rounded-xl bg-red-600 px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-red-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 lg:inline-flex lg:items-center" // <-- ALTERADO
        >
          Contato
        </a>
        
        {/* Mobile Menu Button - Alterado de 'md:hidden' para 'lg:hidden' */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-gray-500 p-2 text-gray-100 transition-colors hover:bg-gray-600 lg:hidden" // <-- ALTERADO
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation - Alterado de 'md:hidden' para 'lg:hidden' */}
      {isOpen && (
        <nav className="border-t border-slate-800/70 bg-black/95 shadow-xl lg:hidden"> {/* // <-- ALTERADO */}
          <div className="container flex flex-col gap-3 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-100 transition-colors hover:bg-gray-600 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-red-400/40 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-red-500"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}