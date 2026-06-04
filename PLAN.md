# Plano de Aprendizado — Angular 21

## Objetivo
Criar um projeto Angular do zero entendendo cada passo, desde o setup até a arquitetura de componentes.

---

## Etapas

### 1. Preparação e Setup
- [ ] Entender pré-requisitos (Node.js, npm, Angular CLI)
- [ ] Revisar o que o Angular CLI gerou automaticamente
- [ ] Rodar o projeto localmente pela primeira vez

### 2. Entender a Estrutura Base
- [ ] Mapear os arquivos obrigatórios e para que servem
- [ ] Entender o ciclo de vida de uma aplicação Angular
- [ ] Compreender o que são componentes standalone (padrão no Angular 21)

### 3. Criar os Primeiros Componentes
- [ ] Criar um componente simples com `ng generate component`
- [ ] Passar dados entre componentes via `@Input` e `@Output`
- [ ] Usar `Signals` para reatividade (abordagem moderna do Angular)

### 4. Navegação com Routing
- [ ] Entender o arquivo de rotas (`app.routes.ts`)
- [ ] Criar duas páginas e navegar entre elas
- [ ] Implementar lazy loading em uma rota

### 5. Consumir uma API
- [ ] Configurar o `HttpClient`
- [ ] Criar um `Service` para separar a lógica de dados
- [ ] Exibir dados de uma API na tela

### 6. Estilização
- [ ] Entender o escopo de estilos por componente (SCSS isolado)
- [ ] Decidir entre CSS puro, SCSS ou uma biblioteca (ex: Angular Material)

---

## Documentação de apoio (pasta `docs/`)

| Arquivo | Conteúdo |
|---|---|
| `docs/01-setup.md` | Pré-requisitos, instalação do CLI, criação do projeto |
| `docs/02-estrutura-base.md` | Mapa de cada arquivo/pasta gerado pelo Angular CLI |
| `docs/03-opcoes-de-personalizacao.md` | Visão geral de arquitetura, padrões e escolhas técnicas |

---

## Observações
- O projeto usa **componentes standalone** (padrão desde Angular 17+) — não há `NgModule`.
- O gerenciamento de estado reativo usa **Signals** (sem necessidade de RxJS para casos simples).
- Estilo configurado com **SCSS**.
