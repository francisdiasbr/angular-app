# 001 — Initial Commit

## O que foi feito
- Criação do projeto Angular 21 com Angular CLI
- Configuração inicial com routing e SCSS
- Adição do `PLAN.md` com o plano de aprendizado e etapas do projeto
- Criação da pasta `docs/` com documentação de apoio
- Instalação do Angular CLI globalmente
- Inicialização do repositório git e publicação no GitHub

---

## Conceitos das pastas e arquivos criados

### `src/`
Pasta principal da aplicação — todo o código que você escreve fica aqui. O Angular CLI lê essa pasta para compilar e servir o projeto.

### `src/main.ts`
Ponto de entrada da aplicação. É o primeiro arquivo executado pelo navegador. Ele chama `bootstrapApplication()` que inicializa o Angular com o componente raiz e as configurações globais.

### `src/app/app.ts`
O **componente raiz** — o "esqueleto" da aplicação. Todo componente Angular é uma classe TypeScript decorada com `@Component`, que define:
- `selector` — o nome da tag HTML que representa o componente (`<app-root>`)
- `templateUrl` — o arquivo HTML com a estrutura visual
- `styleUrl` — o arquivo SCSS com os estilos
- `imports` — outros componentes ou módulos que este componente usa

### `src/app/app.config.ts`
Configuração global da aplicação. Define os **providers** — serviços disponíveis em toda a app, como o sistema de rotas (`provideRouter`) e o cliente HTTP (quando adicionado).

### `src/app/app.routes.ts`
Define as **rotas** da aplicação: qual URL carrega qual componente. Por enquanto está vazio — será preenchido conforme novas páginas forem criadas.

### `src/index.html`
O único HTML da aplicação. O Angular é uma **SPA** (Single Page Application) — há uma única página HTML e o JavaScript controla o que aparece na tela. A tag `<app-root>` dentro dele é onde o componente raiz é inserido.

### `angular.json`
Arquivo de configuração do Angular CLI. Define caminhos de build, assets, estilos globais e configurações de produção. Raramente editado manualmente.

### `tsconfig.json`
Configuração do TypeScript. Define o quão rigorosa é a checagem de tipos e como o código é compilado para JavaScript.

### `package.json`
Lista todas as dependências do projeto e os scripts disponíveis (`ng serve`, `ng build`, etc.). É o arquivo central do npm.

### `docs/`
Pasta de documentação criada manualmente para registrar os conceitos do projeto ao longo do aprendizado.

### `commit_logs/`
Pasta criada para registrar o histórico de evolução do projeto — cada commit tem um arquivo descrevendo o que foi feito e os conceitos envolvidos.

---

## Estado do projeto
Projeto rodando localmente em `http://localhost:4200` com a tela padrão do Angular CLI.

## Próximos passos
Criar o primeiro componente do zero.
