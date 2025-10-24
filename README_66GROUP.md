# 66 Group - Website Profissional

Um website elegante, limpo e profissional para o 66 Group, um conglomerado empresarial focado em consultoria, tecnologia e investimentos.

## 📋 Visão Geral do Projeto

O projeto foi desenvolvido utilizando as melhores práticas de design web moderno, com foco em:
- **Design Limpo e Elegante**: Minimalista, com muito espaço em branco
- **Identidade Visual Forte**: Baseada na logo do 66 Group (preto e vermelho)
- **Responsividade**: Totalmente adaptável para dispositivos móveis e desktop
- **Performance**: Otimizado para carregamento rápido
- **Acessibilidade**: Seguindo padrões WCAG

## 🎨 Identidade Visual

### Paleta de Cores
| Elemento | Cor | Código Hexadecimal | Uso |
|----------|-----|-------------------|-----|
| Vermelho (Primário) | Vermelho | `#E52320` | Botões, links, destaques |
| Preto (Secundário) | Preto | `#1A1A1A` | Fundo de seções, texto principal |
| Branco (Fundo) | Branco | `#FFFFFF` | Fundo principal |
| Cinza Claro | Cinza | `#F5F5F5` | Fundo alternado |
| Cinza Escuro | Cinza | `#666666` | Texto secundário |

### Tipografia
- **Títulos (H1-H6)**: Montserrat (Bold/Semi-Bold) - Moderna, geométrica, forte impacto
- **Corpo de Texto**: Roboto (Regular/Medium) - Alta legibilidade, profissional

## 🏗️ Estrutura do Projeto

```
66group/
├── client/
│   ├── public/
│   │   └── logo-66group.png          # Logo do 66 Group
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx            # Navegação principal
│   │   │   ├── Footer.tsx            # Rodapé com contato
│   │   │   └── ui/                   # Componentes shadcn/ui
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Página principal (one-page)
│   │   │   └── NotFound.tsx          # Página 404
│   │   ├── App.tsx                   # Roteamento principal
│   │   ├── main.tsx                  # Entrada React
│   │   └── index.css                 # Estilos globais e tokens
│   ├── index.html                    # HTML principal
│   └── package.json                  # Dependências
├── vite.config.ts                    # Configuração Vite
└── tailwind.config.ts                # Configuração Tailwind
```

## 📄 Seções da Página Principal

### 1. **Header/Navegação**
- Logo 66 Group (esquerda)
- Menu de navegação (desktop)
- Menu hambúrguer responsivo (mobile)
- Botão CTA "Contato"

### 2. **Hero Section**
- Fundo escuro (preto)
- Título principal: "O Futuro da Gestão Começa Aqui"
- Subtítulo: "66 Group: Estratégias Sólidas para Resultados Excepcionais"
- Botão CTA: "Conheça Nossas Soluções"

### 3. **O Grupo**
- Apresentação do 66 Group
- Descrição da visão e missão
- Linha de destaque em vermelho

### 4. **Nossas Unidades de Negócio**
Três cards apresentando:
- **66 Consultoria**: Consultoria Estratégica e Otimização de Processos
- **66 Tech**: Soluções em Tecnologia e Desenvolvimento de Software
- **66 Invest**: Gestão de Ativos e Planejamento Financeiro

### 5. **Nossos Pilares de Atuação**
Lista de 4 serviços principais:
- Gestão Estratégica
- Transformação Digital
- Otimização Operacional
- Inteligência de Mercado

### 6. **O Diferencial 66**
Seção em fundo escuro com 4 diferenciais:
1. Visão Integrada
2. Foco em Resultados
3. Inovação Constante
4. Profissionalismo e Ética

### 7. **Call to Action**
- Fundo vermelho
- Mensagem: "Pronto para Transformar Seu Negócio?"
- Botão: "Entre em Contato"

### 8. **Contato**
- Informações de contato (telefone, email, endereço)
- Formulário de contato completo
- Campos: Nome, Email, Telefone, Assunto, Mensagem

### 9. **Footer**
- Logo e descrição
- Links rápidos
- Informações de contato
- Links de redes sociais
- Copyright e links legais

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ ou superior
- pnpm (recomendado) ou npm

### Passos de Instalação

1. **Descompacte o arquivo ZIP**
```bash
unzip 66group-final.zip
cd 66group
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

```bash
pnpm build
# ou
npm run build
```

Os arquivos compilados estarão em `dist/`.

## 🎯 Funcionalidades Implementadas

✅ Navegação responsiva com menu hambúrguer
✅ Seções com scroll suave (smooth scroll)
✅ Formulário de contato funcional (HTML5)
✅ Design mobile-first
✅ Paleta de cores consistente
✅ Tipografia profissional
✅ Cards com hover effects
✅ Ícones SVG inline
✅ Footer com links de redes sociais
✅ Acessibilidade básica (labels, aria-labels)

## 🔧 Customização

### Alterar Cores
Edite `/client/src/index.css` e modifique as variáveis CSS:
```css
:root {
  --primary: oklch(0.55 0.2 25);  /* Vermelho */
  --secondary: oklch(0.1 0 0);    /* Preto */
  /* ... outras cores ... */
}
```

### Alterar Fontes
As fontes são importadas do Google Fonts no `index.css`. Para mudar:
1. Acesse [Google Fonts](https://fonts.google.com)
2. Selecione as fontes desejadas
3. Atualize a URL de importação em `index.css`
4. Atualize as referências em `body` e `h1-h6`

### Adicionar Novas Seções
1. Crie um novo componente em `client/src/components/`
2. Importe-o em `Home.tsx`
3. Adicione a seção ao layout

## 📱 Responsividade

O projeto utiliza Tailwind CSS com breakpoints padrão:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todos os componentes foram testados em diferentes tamanhos de tela.

## 🔗 Links Úteis

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 📝 Notas Importantes

1. **Formulário de Contato**: Atualmente é um formulário HTML5. Para funcionalidade real, integre com um serviço de email (Formspree, EmailJS, etc.)

2. **Informações de Contato**: Os dados de contato (telefone, email, endereço) são placeholders. Atualize com informações reais em:
   - `Home.tsx` (seção de contato)
   - `Footer.tsx` (rodapé)

3. **Redes Sociais**: Os links de redes sociais no footer são placeholders. Atualize com URLs reais.

4. **Logo**: A logo está em `client/public/logo-66group.png`. Substitua por versões diferentes conforme necessário.

## 🎓 Stack Tecnológico

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato através dos dados fornecidos no website.

---

**Desenvolvido com ❤️ para o 66 Group**

