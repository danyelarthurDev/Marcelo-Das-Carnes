# Site Marcelo das Carnes

Protótipo do site do açougue, com cardápio por categoria, carrinho de pedido e finalização via WhatsApp.

## Estrutura de pastas

```
marcelo-das-carnes/
├── index.html      → estrutura da página (textos, seções)
├── css/
│   └── styles.css  → cores, fontes, layout
├── js/
│   └── script.js   → produtos, carrinho e lógica do pedido
└── README.md
```

## Como abrir

Basta abrir o arquivo `index.html` em qualquer navegador. Não precisa de instalação nem servidor.

## O que já foi ajustado

- Endereço, horário de funcionamento e WhatsApp já estão preenchidos com os dados reais do açougue (em `index.html` e no número de checkout do `js/script.js`).

## O que ainda falta ajustar antes de publicar de verdade

1. **Produtos e preços** — em `js/script.js`, no objeto `PRODUCTS`, cada corte tem `name`, `desc`, `price` e `unit`. Edite, adicione ou remova itens livremente nas três categorias (`bovinos`, `aves`, `suinos`).

2. **Fotos** — atualmente o site não usa fotos dos produtos. Quando vocês tiverem fotos reais, dá para adicionar uma imagem por corte no cardápio (posso ajudar nessa etapa depois).

## Mapa de localização

Como sites publicados nesse formato bloqueiam mapas incorporados (iframe) por segurança, a seção de contato usa um cartão com o endereço e um botão "Abrir no Google Maps" — mais leve, confiável em qualquer navegador, e no celular já abre direto no app do Maps com a rota. Se o endereço mudar, atualize o texto dentro de `.map-card-address` e o link do botão em `index.html`.

## Cores e fontes (caso queiram ajustar)

As cores ficam no topo do `css/styles.css`, dentro de `:root`:
- `--red`: vermelho principal (botões, destaques)
- `--black`: preto quente (cabeçalho, textos)
- `--gold`: dourado (detalhes, selos)
- `--cream`: fundo da página

As fontes usadas são `Anton` (títulos) e `Work Sans` (textos), carregadas do Google Fonts.

## Publicando o site

Este projeto é só HTML/CSS/JS puro, então pode ser publicado em qualquer serviço de hospedagem simples (Hostinger, Netlify, Vercel, GitHub Pages, etc.) — basta subir os três arquivos/pastas mantendo a mesma estrutura.
