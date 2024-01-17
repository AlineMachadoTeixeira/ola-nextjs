## Usando terminal

- `npm run dev`
- `npm run dev -- --host 0.0.0.0 --open` Entrar direto e abre o navegador já com a pagina
  Local: http://localhost:5173/ (computador) ➜ Network: http://10.20.46.47:5173/(celular)
- cls --> limpar pasta
- dir --> para achar pasta
- cd --> acha arquivo um por um
- node espaço +nome da pasta --> ver o resultado que está na pasta com console.log
- cd.. --> volta algumas pastas ou uma pasta
- ctrl +C --> para parar o CMD ou qualquer

# Anotações gerais sobre o Next.js

Next.js é um framework Fullstack que permite criar aplicações React modernas e otimizadas para mecanismos de busca.

Next.js faz a renderização do HTML no servidor, ou seja, é `SSR Servir Side Rendering`.

Para criar a navegar por páginas na aplicação Next.js, basta criar componentes/páginas no diretório `pages` que automaticamente elas estarão disponiveis para navegação através da rotas.

## Sobre os arquivos \_app.sj e \_document.js

Está na parte pages \_app.js \_document.js
Arquivos de configuração global para personalizar o comportamento da aplicação Next.js

### \_app.sj

- Adicionar componentes globais ao app
- Pode ser usado para layout e estilos globais
- Tem uma finalidade semelhante ao App.js ou index do React
- Renderizado no Client e no Server

### \_document.js

- Usado para personalizar o HTML de todas as páginas em relação ao <head>
- Pode ser usado para meta tags, scripts, estilos globais
- É carregado no servidor na renderização inicial
