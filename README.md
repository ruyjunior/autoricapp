# Autoric Automação & Sistemas

Site institucional da Autoric, com apresentação de serviços, equipe, clientes, tecnologias e projetos.

## Portfólio

A página de entregas lista os repositórios públicos da organização [Autoric-Automation-Systems](https://github.com/Autoric-Automation-Systems), consultados pela API pública do GitHub. A lista é armazenada em cache por uma hora. Repositórios com `homepage` configurada também exibem o link para o projeto publicado.

O ícone de cada projeto é resolvido de duas formas, nesta ordem:

1. `repositoryIcons`, em `app/(public)/deliveries/page.tsx` — overrides curados, usados quando a logo não está no próprio repositório (por exemplo, `sp-th`, `sp-ff` e `sp-ps` guardam a imagem em `smartplantapp`).
2. Busca automática na árvore do repositório, procurando arquivos `logo.*` ou `icon.*` (PNG/WebP/JPEG). Se nada for encontrado, o card cai no ícone genérico do GitHub.

Por isso um repositório novo já aparece com foto, sem precisar de alteração no código — a entrada em `repositoryIcons` só é necessária em casos excepcionais.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Para validar a compilação de produção:

```bash
pnpm build
```
