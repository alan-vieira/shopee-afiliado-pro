# 🛍️ Shopee Afiliado Pro – Extensão para Chrome

**Shopee Afiliado Pro** é uma extensão inteligente para o Google Chrome que detecta automaticamente todos os links de produtos da Shopee abertos nas suas abas, converte-os para o novo formato oficial de afiliado e permite que você salve todos os links convertidos em um único arquivo .txt.

Ideal para afiliados que compartilham links no Instagram, WhatsApp, blogs ou redes sociais — tudo de forma rápida, prática e 100% automatizada.

---

## ✅ Funcionalidades

- 🔍 Detecta todos os produtos da Shopee abertos no navegador
- 🔗 Converte links para o novo formato oficial de afiliado da Shopee:

```bash
https://affiliate.shopee.com.br/offer/product_offer/ITEMID
```
Funciona com qualquer formato de URL da Shopee:
```bash
https://shopee.com.br/product/...
```
```bash
https://shopee.com.br/nome-do-produto-i.SHOPID.ITEMID
```

- 💾 Exporta todos os links convertidos em um arquivo .txt com um clique
- 🚫 Sem necessidade de copiar e colar manualmente

---

## 🧰 Requisitos

- Google Chrome (ou navegador baseado em Chromium)
- Sistema operacional Windows, Linux ou macOS
- JavaScript habilitado (necessário para o funcionamento da Shopee)

---

## 📥 Instalação Manual (Modo Desenvolvedor)

1. Baixe ou clone este repositório:

 ```bash
git clone https://github.com/alan-vieira/shopee-afiliado-pro.git
 ```
Ou baixe o .zip e extraia a pasta.

2. No Chrome, abra:

```bash
chrome://extensions
```

3. Ative o Modo do desenvolvedor no canto superior direito.
4. Clique em "Carregar sem compactação".
5. Selecione a pasta `shopee-afiliado-pro`.

## 🚀 Como Usar

1. Abra várias páginas de produtos da Shopee em abas diferentes.
2. Clique no ícone da extensão (S ou 🛒) na barra de ferramentas do Chrome.
3. O popup exibirá automaticamente todos os links convertidos.
4. Clique em “Salvar em .txt” para baixar a lista completa.

Pronto! Agora você pode colar os links onde quiser — todos já estão no formato de afiliado.

## 📁 Estrutura do Projeto

```bash
shopee-afiliado-pro/
├── manifest.json      # Configurações da extensão (Manifest V3)
├── popup.html         # Interface do popup (lista links e botão de salvar)
├── popup.js           # Lógica: busca abas, extrai ITEMID, converte e salva
├── icon.png           # Ícone da extensão (reutilizado em múltiplos tamanhos)
└── README.md          # Este arquivo
```

## 🧠 Exemplo de Conversão

🔗 URL original:
```bush
https://shopee.com.br/Cadeira-De-Escrit%C3%B3rio-Best-Ergon%C3%B4mica-i.848154311.20199562728?sp_atk=1a8bddb1...
```

✅ Link convertido:
```bush
https://affiliate.shopee.com.br/offer/product_offer/20199562728
```

## 🛠️ Tecnologias Utilizadas
- JavaScript (puro, sem dependências)
- HTML5 + CSS3 (interface simples e responsiva)
- Chrome Extensions API (Manifest V3)
- Baseado em chrome.tabs para leitura de abas

## 📝 Licença
Este projeto está licenciado sob a **Licença MIT**.
Veja o arquivo [LICENSE](https://github.com/alan-vieira/shopee-afiliado-pro/tree/main?tab=MIT-1-ov-file) para mais detalhes.

## Autor

| [<img src="https://avatars.githubusercontent.com/alan-vieira" width=115><br><sub>Alan Vieira</sub>](https://github.com/alan-vieira) |
| :---: |

