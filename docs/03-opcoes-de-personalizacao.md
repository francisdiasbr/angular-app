# 03 — Opções de Personalização e Arquitetura

Esta seção apresenta as principais escolhas arquiteturais que você vai encontrar em projetos Angular. Nenhuma delas é obrigatória para começar — mas entendê-las ajuda a tomar decisões conscientes à medida que o projeto cresce.

---

## 1. Gerenciamento de Estado Reativo

"Estado" é qualquer dado que muda ao longo do tempo e afeta o que aparece na tela (ex: lista de itens, usuário logado, loading, etc.).

### Signals (recomendado para projetos novos)
Introduzido no Angular 16, é a forma moderna e mais simples de reatividade.

```typescript
import { signal, computed } from '@angular/core';

count = signal(0);
double = computed(() => this.count() * 2);

increment() {
  this.count.update(v => v + 1);
}
```

- Simples, direto, sem boilerplate
- Boa performance (Angular sabe exatamente o que mudou)

### RxJS / Observables
A abordagem tradicional do Angular. Muito poderosa para fluxos de dados assíncronos complexos (ex: combinar múltiplas requisições HTTP).

```typescript
import { Observable } from 'rxjs';

dados$: Observable<string[]> = this.service.buscarDados();
```

- Curva de aprendizado maior
- Ainda amplamente usado, especialmente com o `HttpClient`
- Para iniciantes: use Signals para estado local e RxJS apenas quando o `HttpClient` exigir

---

## 2. Estilização

### CSS puro
Sem configuração extra. Funciona, mas sem variáveis nativas robustas.

### SCSS (este projeto)
Pré-processador CSS — permite variáveis, aninhamento, mixins. Compilado automaticamente pelo Angular CLI.

```scss
$primary: #3f51b5;

.botao {
  background: $primary;

  &:hover {
    opacity: 0.9;
  }
}
```

### Angular Material
Biblioteca oficial de componentes UI seguindo o Material Design. Botões, inputs, tabelas, diálogos prontos.

```bash
ng add @angular/material
```

### TailwindCSS
Framework de classes utilitárias. Popular em projetos que já usam Tailwind em outros frameworks.

```bash
npm install tailwindcss @tailwindcss/postcss
```

---

## 3. Organização de Pastas

Não existe uma estrutura obrigatória, mas há convenções:

### Por tipo (padrão do CLI)
```
src/app/
├── components/
├── services/
├── models/
└── pages/
```

### Por funcionalidade (recomendado para projetos maiores)
```
src/app/
├── auth/
│   ├── login/
│   └── auth.service.ts
├── produtos/
│   ├── lista-produtos/
│   └── produtos.service.ts
└── shared/
    └── components/
```

---

## 4. Lazy Loading de Rotas

Por padrão, o Angular carrega todo o código da aplicação de uma vez. Com **lazy loading**, cada rota só carrega seu código quando o usuário navega para ela — melhora o tempo de carregamento inicial.

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: 'produtos',
    loadComponent: () =>
      import('./produtos/lista-produtos.component').then(m => m.ListaProdutosComponent)
  }
];
```

---

## 5. Testes

| Ferramenta | Para que serve |
|---|---|
| **Jasmine + Karma** | Testes unitários (padrão do Angular CLI) |
| **Jest** | Alternativa ao Karma, mais rápido |
| **Cypress / Playwright** | Testes end-to-end (testa a UI no navegador de verdade) |

---

## Resumo: O que usar neste projeto

| Decisão | Escolha |
|---|---|
| Reatividade | **Signals** |
| Estilo | **SCSS** |
| Componentes UI | Sem biblioteca (começar simples) |
| Estrutura de pastas | Por funcionalidade (quando necessário) |
| Lazy loading | Sim, nas rotas principais |
