# Landing Page — Dr. Fernando Pequeno

Site estático (HTML/CSS/JS puro, sem build step) pronto para publicar no GitHub Pages.

## Estrutura de pastas

```
.
├── index.html          → todo o conteúdo e a estrutura da página
├── css/
│   └── style.css        → cores, tipografia e layout (tudo via variáveis CSS no topo do arquivo)
├── js/
│   └── main.js           → menu mobile + ano do rodapé (sem dependências)
├── assets/
│   └── img/               → coloque aqui as fotos reais (hero, og-cover, favicon)
├── sitemap.xml
├── robots.txt
└── .nojekyll             → impede o GitHub Pages de processar o site como Jekyll
```

## Como editar conteúdo

- **Textos**: tudo fica direto no `index.html`, organizado em seções comentadas
  (`<!-- HERO -->`, `<!-- SERVIÇOS -->` etc.). Não é preciso mexer em CSS/JS para
  trocar um texto.
- **Serviços** (Medicamentos Injetáveis, Teste Genético...): cada um é um bloco
  independente `<article class="service-card">` dentro de `#servicos`. Para
  adicionar um novo serviço, duplique um bloco inteiro e edite o texto.
- **Cores e fontes**: só em um lugar — o topo do `css/style.css`, na seção
  `:root { ... }`. Trocar `--color-accent`, por exemplo, muda a cor em todo o
  site de uma vez.
- **Imagens**: os `<img>` no `index.html` apontam para arquivos placeholder em
  `assets/img/`. Basta substituir os arquivos mantendo o mesmo nome, ou trocar
  o `src` se usar outro nome de arquivo.
- **WhatsApp/telefone**: procure por `5562984201003` no `index.html` (aparece
  no CTA principal e no rodapé) e substitua pelo número correto, se mudar.

## SEO — o que já está pronto

- `<title>` e `<meta name="description">` otimizados (edite no `<head>` do
  `index.html` sempre que o foco da campanha mudar).
- Open Graph e Twitter Card para preview correto ao compartilhar o link.
- Dados estruturados (JSON-LD, tipo `MedicalClinic`) com nome, endereço e
  telefone — ajuda o Google a exibir a clínica corretamente em buscas locais.
- `sitemap.xml` e `robots.txt` na raiz.
- HTML semântico (`header`, `main`, `section`, `footer`, `address`) e
  hierarquia de headings correta (um único `<h1>`, depois `<h2>`/`<h3>`).
- Todas as imagens têm `alt` — ao trocar uma imagem, atualize também o texto
  alternativo para descrever a nova foto.

**Antes de publicar de verdade**, troque:
1. O domínio de exemplo `https://www.drfernandopequeno.com.br/` (aparece no
   `index.html` — canonical, Open Graph, JSON-LD — e no `sitemap.xml`/`robots.txt`)
   pelo domínio real.
2. As imagens placeholder em `assets/img/` (hero, `og-cover.jpg`, `favicon.png`).
3. Os links de redes sociais (Instagram/YouTube) no rodapé e no JSON-LD.

## Publicar no GitHub Pages

1. Suba esta pasta para um repositório no GitHub (pode ser a raiz do repo).
2. No repositório: **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch (ex.: `main`) e a pasta `/ (root)`.
5. Salve. Em alguns minutos o site estará em
   `https://<seu-usuario>.github.io/<repo>/`.
6. Se for usar um domínio próprio, adicione um arquivo `CNAME` na raiz com o
   domínio, e configure o DNS conforme a documentação do GitHub Pages.

Nenhuma etapa de build é necessária — é HTML/CSS/JS puro.
