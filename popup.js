document.addEventListener('DOMContentLoaded', () => {
  const ul = document.getElementById('url-list');
  const salvarBtn = document.getElementById('salvar-btn');
  const copyAllBtn = document.getElementById('copy-all-btn');
  let urls = [];

  // Atualiza o contador
  function updateCounter() {
    document.getElementById('counter').textContent = urls.length;
  }

  // Função para mostrar notificação
  function showNotification(message) {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notification-text');
    const okBtn = document.getElementById('notification-ok');

    text.textContent = message;
    notification.style.display = 'block';

    // Fecha ao clicar em OK
    okBtn.onclick = () => {
      notification.style.display = 'none';
    };

    // Fecha automaticamente após 3 segundos
    setTimeout(() => {
      if (notification.style.display === 'block') {
        notification.style.display = 'none';
      }
    }, 3000);
  }

  // Extrai o itemid do formato: i.SHOPID.ITEMID
  const extrairItemId = (url) => {
    const match = url.match(/i\.(\d+)\.(\d+)/);
    return match ? match[2] : null;
  };

  // Extrai o product_id do formato antigo: /product/shopid/itemid
  const extrairProductId = (url) => {
    const match = url.match(/\/product\/\d+\/(\d+)/);
    return match ? match[1] : null;
  };

  // Converte qualquer link da Shopee para o novo formato de afiliado
  const converterParaAfiliado = (url) => {
    let itemId = null;

    if (url.includes('shopee.com.br')) {
      if (url.includes('/product/')) {
        itemId = extrairProductId(url);
      } else if (url.includes('i.')) {
        itemId = extrairItemId(url);
      }
    }

    if (itemId) {
      // ✅ Corrigido: removido espaço extra
      return `https://affiliate.shopee.com.br/offer/product_offer/${itemId}`;
    }
    return null;
  };

  // Busca todas as abas abertas
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(tab => {
      const url = tab.url;

      if (typeof url !== 'string') return;

      const linkAfiliado = converterParaAfiliado(url);
      if (linkAfiliado && !urls.includes(linkAfiliado)) {
        urls.push(linkAfiliado);

        const li = document.createElement('li');
        li.textContent = linkAfiliado;
        ul.appendChild(li);
      }
    });

    // Mensagem se não encontrar links
    if (urls.length === 0) {
      const li = document.createElement('li');
      li.textContent = "Nenhum produto da Shopee encontrado.";
      li.classList.add('empty');
      ul.appendChild(li);
    }

    // Atualiza contador após carregar
    updateCounter();
  });

  // Botão para salvar em .txt
  salvarBtn.addEventListener('click', () => {
    if (urls.length === 0) {
      alert("Nenhum link de afiliado para salvar.");
      return;
    }

    const blob = new Blob([urls.join('\n')], { type: 'text/plain' });
    const urlBlob = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = urlBlob;
    a.download = `shopee_afiliado_pro_${new Date().toISOString().slice(0,10)}.txt`;
    a.click();

    URL.revokeObjectURL(urlBlob);
  });

  // Botão para copiar todos os links
  copyAllBtn.addEventListener('click', async () => {
    if (urls.length === 0) {
      showNotification("Nenhum link para copiar.");
      return;
    }

    try {
      await navigator.clipboard.writeText(urls.join('\n'));
      showNotification(`${urls.length} link(s) copiado(s)!`);
    } catch (err) {
      console.error('Erro ao copiar:', err);
      showNotification('Falha ao copiar. Verifique permissões.');
    }
  });
});