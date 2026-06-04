# 01 — Setup

## O que você precisa ter instalado

Antes de criar qualquer projeto Angular, sua máquina precisa ter:

| Ferramenta | Para que serve | Como verificar |
|---|---|---|
| **Node.js** (v18+) | Ambiente de execução JavaScript | `node -v` |
| **npm** | Gerenciador de pacotes (vem com o Node) | `npm -v` |
| **Angular CLI** | Ferramenta de linha de comando do Angular | `ng version` |

---

## Instalar o Angular CLI

O Angular CLI (`ng`) é o que permite criar projetos, gerar componentes, rodar o servidor, etc.

```bash
npm install -g @angular/cli
```

O `-g` instala globalmente — ou seja, o comando `ng` fica disponível em qualquer pasta do seu computador.

---

## Criar um novo projeto

```bash
ng new my-app --routing --style=scss
```

O que cada flag faz:
- `--routing` → cria o arquivo de rotas automaticamente
- `--style=scss` → configura SCSS como pré-processador de estilos

O CLI vai criar a pasta `my-app/` com todos os arquivos necessários e instalar as dependências.

---

## Rodar o projeto

Dentro da pasta do projeto:

```bash
cd my-app
ng serve
```

Acesse `http://localhost:4200` no navegador. O servidor tem **hot reload** — qualquer alteração no código atualiza a tela automaticamente.

---

## Comandos essenciais do CLI

| Comando | O que faz |
|---|---|
| `ng serve` | Sobe o servidor de desenvolvimento |
| `ng build` | Gera o build de produção na pasta `dist/` |
| `ng generate component nome` | Cria um novo componente |
| `ng generate service nome` | Cria um novo service |
| `ng test` | Roda os testes unitários |

---

## Dica: versões do Angular

O Angular segue **versionamento semântico** com uma major release a cada 6 meses. Este projeto usa a versão **21**. Você pode ver a versão instalada com:

```bash
ng version
```
