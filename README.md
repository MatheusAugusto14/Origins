# Origins — PWA (Offline)

Este pacote é uma versão do seu projeto configurada como **Progressive Web App (PWA)** com suporte offline.

## Como usar

1. Instale dependências:
```bash
npm install
```

2. Rodar em desenvolvimento:
```bash
npm run dev
# abre http://localhost:5173 por padrão
```

3. Build para produção:
```bash
npm run build
```

4. Servir a pasta `dist` para testar (localmente):
```bash
npm run preview
# ou: npx serve dist
```

## PWA / Offline
- Manifest: `public/manifest.webmanifest`
- Ícones: `public/icons/icon-192.png`, `public/icons/icon-512.png`
- Service Worker gerado pelo plugin `vite-plugin-pwa` (configuração em `vite.config.js`)
- Para testar offline: faça `npm run build` e abra `npm run preview` em HTTPS ou use `npx serve dist` e teste no Chrome DevTools -> Application -> Service Workers e em Lighthouse.

## Observações
- `node_modules` foi removido do pacote para manter o ZIP leve. Rode `npm install` localmente para baixar dependências.
- Se quiser empacotar para Play Store / App Store, posso ajudar a adicionar Capacitor.

## Comandos úteis
- `npm run dev` — desenvolvimento
- `npm run build` — build produção
- `npm run preview` — servidor local para testar build



## Publicar no GitHub Pages (automático)

1. Crie o repositório no GitHub com o nome **Origins**.
2. Adicione o remoto e faça push do projeto:
```bash
git init
git add .
git commit -m "Prepare PWA for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/Origins.git
git push -u origin main
```
3. Instale dependências localmente e rode deploy manual (opcional):
```bash
npm install
npm run deploy
```
Isto irá construir (`dist/`) e publicar no branch `gh-pages` usando `gh-pages`.
Após alguns minutos, seu site estará disponível em: `https://<seu-usuario>.github.io/Origins/`

## Deploy automático via GitHub Actions
Incluí um workflow de exemplo em `.github/workflows/deploy.yml` — ao dar push na branch `main` ele fará build e publicará automaticamente.

Lembre-se de substituir `<seu-usuario>` pelo seu usuário do GitHub onde necessário.
