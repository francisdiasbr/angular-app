# 02 — Estrutura Base do Projeto

Quando o Angular CLI cria um projeto, ele gera uma estrutura de arquivos padrão. Aqui está o mapa completo:

```
my-app/
├── src/
│   ├── app/
│   │   ├── app.component.html      ← template HTML do componente raiz
│   │   ├── app.component.scss      ← estilos do componente raiz
│   │   ├── app.component.spec.ts   ← testes do componente raiz
│   │   ├── app.component.ts        ← lógica do componente raiz
│   │   ├── app.config.ts           ← configuração global da aplicação
│   │   └── app.routes.ts           ← definição das rotas
│   ├── index.html                  ← HTML principal (único da aplicação)
│   ├── main.ts                     ← ponto de entrada da aplicação
│   └── styles.scss                 ← estilos globais
├── public/                         ← arquivos estáticos (imagens, fontes, etc.)
├── angular.json                    ← configuração do Angular CLI
├── package.json                    ← dependências e scripts npm
├── tsconfig.json                   ← configuração do TypeScript
└── tsconfig.app.json               ← configuração TS específica do app
```

---

## Arquivo por arquivo

### `src/main.ts`
O ponto de entrada da aplicação. É o primeiro arquivo executado. Ele inicializa o Angular com o componente raiz e as configurações globais.

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig);
```

Analogia: é como o `index.js` de um projeto Node — onde tudo começa.

---

### `src/app/app.component.ts`
O **componente raiz** — o "esqueleto" da aplicação. Todo o resto da UI é renderizado dentro dele.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',        // nome da tag HTML que representa esse componente
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
```

Um componente no Angular é uma **classe TypeScript + decorador `@Component`**. O decorador é o que diz ao Angular "essa classe é um componente".

---

### `src/app/app.config.ts`
Configuração global da aplicação: quais provedores (providers) estão disponíveis em toda a app, como o sistema de rotas e o cliente HTTP.

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```

---

### `src/app/app.routes.ts`
Define quais URLs levam a quais componentes.

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
];
```

---

### `src/index.html`
O único HTML da aplicação. O Angular é uma **SPA** (Single Page Application) — só existe uma página HTML, e o JavaScript controla o que aparece na tela.

A tag `<app-root>` é onde o componente raiz é inserido:

```html
<body>
  <app-root></app-root>
</body>
```

---

### `angular.json`
Configuração do CLI — define caminhos de build, assets, estilos globais, configurações de produção. Você raramente edita esse arquivo manualmente.

---

### `tsconfig.json`
Configuração do TypeScript. Define como o TS compila o código: quão strict é a checagem de tipos, qual versão do JS é gerada, etc.

---

## O que são Componentes Standalone?

No Angular moderno (a partir da v17, padrão no v21), os componentes são **standalone** — eles se auto-descrevem e não precisam ser declarados em nenhum módulo (`NgModule`).

Antes (Angular antigo):
```
AppModule → declara AppComponent, HomeComponent, etc.
```

Agora (Angular 17+):
```
AppComponent importa diretamente o que precisa usar
```

Isso torna o código mais simples e parecido com o modelo de outros frameworks modernos.
