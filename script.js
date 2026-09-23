(function(){
  var PRODUCTS = {
    bovinos: [
      { id: 'b1', name: 'Picanha', desc: 'Peça inteira, limpa, ideal para churrasco.', price: 39.99, unit: 'kg' },
      { id: 'b2', name: 'Patinho', desc: 'Carne magra e versátil, ótima para bifes e ensopados.', price: 39.99, unit: 'kg' },
      { id: 'b3', name: 'Alcatra', desc: 'Corte macio, ótimo para bife ou assado.', price: 39.99, unit: 'kg' },
      { id: 'b4', name: 'Maminha', desc: 'Macia e suculenta, ótima para grelhar.', price: 39.99, unit: 'kg' },
      { id: 'b5', name: 'Coxão Mole', desc: 'Carne macia, ótima para bifes e escalopes.', price: 39.99, unit: 'kg' },
      { id: 'b6', name: 'Filé Mignon', desc: 'Corte nobre, extremamente macio.', price: 44.99, unit: 'kg' },
      { id: 'b7', name: 'Coxão Duro', desc: 'Ótimo para cozidos e carne de panela.', price: 34.99, unit: 'kg' },
      { id: 'b8', name: 'Costela Bovina', desc: 'Ideal para churrasco e cozimento lento.', price: 34.99, unit: 'kg' },
      { id: 'b9', name: 'Lombo Bovino', desc: 'Corte magro, versátil no dia a dia.', price: 32.99, unit: 'kg' },
      { id: 'b10', name: 'Costelinha Bovina', desc: 'Perfeita para churrasco e assados.', price: 24.99, unit: 'kg' },
      { id: 'b11', name: 'Bisteca Bovina', desc: 'Com osso, ótima para grelhar.', price: 29.99, unit: 'kg' },
      { id: 'b12', name: 'Palheta Bovina', desc: 'Ideal para cozidos e carne desfiada.', price: 22.99, unit: 'kg' },
      { id: 'b13', name: 'Lombo Bovino com Osso', desc: 'Saboroso, ótimo para assados.', price: 22.99, unit: 'kg' },
      { id: 'b14', name: 'Osso Buco', desc: 'Perfeito para cozidos e caldos encorpados.', price: 21.99, unit: 'kg' },
      { id: 'b15', name: 'Mão e Perna Bovina', desc: 'Tradicional para caldos e cozidos.', price: 19.99, unit: 'kg' },
      { id: 'b16', name: 'Fígado Bovino', desc: 'Rico em sabor, preparo rápido na chapa.', price: 21.99, unit: 'kg' },
      { id: 'b17', name: 'Panelada Bovina', desc: 'Prato tradicional, pronto para o tempero da casa.', price: 21.99, unit: 'kg' }
    ],
    aves: [
      { id: 'a1', name: 'Frango Abatido', desc: 'Frango abatido, disponível inteiro ou cortado em pedaços, como preferir.', price: 7.99, unit: 'kg', variants: ['Inteiro', 'Cortado em pedaços'] }
    ],
    suinos: [
      { id: 's1', name: 'Coxão Suíno', desc: 'Corte macio, ótimo para assados e bifes.', price: 21.99, unit: 'kg' },
      { id: 's2', name: 'Carré Suíno', desc: 'Com osso, saboroso na grelha ou no forno.', price: 21.99, unit: 'kg' },
      { id: 's3', name: 'Palheta Suína', desc: 'Ideal para cozidos e carne desfiada.', price: 21.99, unit: 'kg' },
      { id: 's4', name: 'Costela Suína', desc: 'Clássica para churrasco e forno.', price: 22.99, unit: 'kg' },
      { id: 's5', name: 'Bisteca Suína', desc: 'Com osso, ótima para grelhar.', price: 21.99, unit: 'kg' },
      { id: 's6', name: 'Sarrabulho Suíno', desc: 'Prato tradicional, pronto para o tempero da casa.', price: 9.99, unit: 'kg' },
      { id: 's7', name: 'Toicinho Suíno', desc: 'Ideal para dar sabor a feijões e cozidos.', price: 9.99, unit: 'kg' },
      { id: 's8', name: 'Tripa Suína', desc: 'Tradicional, pronta para o preparo da casa.', price: 14.99, unit: 'kg' },
      { id: 's9', name: 'Mocotó Suíno', desc: 'Perfeito para caldos e cozidos encorpados.', price: 14.99, unit: 'kg' }
    ]
  };

  var cart = {}; // id -> {product, qty}
  var currentCat = 'bovinos';
  var fulfilMode = 'retirada';

  function loadCart(){
    try {
      var raw = localStorage.getItem('mc_cart_v1');
      if (raw) cart = JSON.parse(raw);
    } catch(e) { cart = {}; }
  }
  function saveCart(){
    try { localStorage.setItem('mc_cart_v1', JSON.stringify(cart)); } catch(e) {}
  }

  function fmt(v){
    return 'R$ ' + v.toFixed(2).replace('.', ',');
  }

  var ICONS = {
    bovinos: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 22c-3-4-2-10 2-11 3-1 5 2 5 5m26 6c3-4 2-10-2-11-3-1-5 2-5 5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M20 21c0-6 4-10 12-10s12 4 12 10c0 5-2 7-2 11 0 8-4 13-10 13s-10-5-10-13c0-4-2-6-2-11z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle cx="26" cy="24" r="1.6" fill="currentColor"/><circle cx="38" cy="24" r="1.6" fill="currentColor"/><path d="M27 33c1.5 1.4 3.2 2 5 2s3.5-.6 5-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    suinos: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="26" rx="16" ry="13" stroke="currentColor" stroke-width="2.5"/><path d="M13 20c-3-1-5 1-5 3s2 3 5 3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M51 20c3-1 5 1 5 3s-2 3-5 3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="32" cy="30" rx="6" ry="4" stroke="currentColor" stroke-width="2"/><circle cx="29.5" cy="30" r="1" fill="currentColor"/><circle cx="34.5" cy="30" r="1" fill="currentColor"/><circle cx="24" cy="22" r="1.6" fill="currentColor"/><circle cx="40" cy="22" r="1.6" fill="currentColor"/></svg>',
    aves: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 12c9 0 15 6 15 15 0 8-4 13-9 16l1 8h-4l-1-6c-1 .2-2 .3-2 .3s-1-.1-2-.3l-1 6h-4l1-8c-5-3-9-8-9-16 0-9 6-15 15-15z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M32 12l-3-6 5 2 3-4 2 5 5-2-2 6" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="27" cy="23" r="1.6" fill="currentColor"/><path d="M35 24l6-2-4 5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
  };

  function renderProducts(){
    var grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    var icon = ICONS[currentCat] || '';
    PRODUCTS[currentCat].forEach(function(p){
      var card = document.createElement('div');
      card.className = 'cut-card';
      card.innerHTML =
        '<div class="cut-icon">' + icon + '</div>' +
        '<div class="cut-name">' + p.name + '</div>' +
        '<div class="cut-desc">' + p.desc + '</div>' +
        '<div class="cut-price-row">' +
          '<div><div class="cut-price">' + fmt(p.price) + '</div><div class="cut-unit">por ' + p.unit + '</div></div>' +
          '<button class="add-btn" data-id="' + p.id + '">Adicionar</button>' +
        '</div>';
      grid.appendChild(card);
    });
  }

  function findProduct(id){
    for (var cat in PRODUCTS){
      for (var i=0;i<PRODUCTS[cat].length;i++){
        if (PRODUCTS[cat][i].id === id) return PRODUCTS[cat][i];
      }
    }
    return null;
  }

  function baseId(key){
    return key.split('::')[0];
  }

  var pendingVariantProductId = null;

  function addToCart(id, variant){
    var p = findProduct(id);
    if (!p) return;
    var key = variant ? (id + '::' + variant) : id;
    if (!cart[key]) cart[key] = { qty: 0, variant: variant || null };
    cart[key].qty += 1;
    saveCart();
    renderCart();
    showToast(p.name + (variant ? ' (' + variant + ')' : '') + ' adicionado ao pedido');
  }

  function handleAddClick(id){
    var p = findProduct(id);
    if (!p) return;
    if (p.variants && p.variants.length){
      openVariantModal(p);
      return;
    }
    addToCart(id);
  }

  function openVariantModal(product){
    pendingVariantProductId = product.id;
    var title = document.getElementById('variantTitle');
    var options = document.getElementById('variantOptions');
    title.textContent = 'Como você quer o(a) ' + product.name.toLowerCase() + '?';
    options.innerHTML = '';
    product.variants.forEach(function(v){
      var btn = document.createElement('button');
      btn.className = 'variant-option';
      btn.textContent = v;
      btn.setAttribute('data-variant', v);
      options.appendChild(btn);
    });
    document.getElementById('variantOverlay').classList.add('open');
    document.getElementById('variantModal').classList.add('open');
  }

  function closeVariantModal(){
    pendingVariantProductId = null;
    document.getElementById('variantOverlay').classList.remove('open');
    document.getElementById('variantModal').classList.remove('open');
  }

  function changeQty(key, delta){
    if (!cart[key]) return;
    cart[key].qty += delta;
    if (cart[key].qty <= 0) delete cart[key];
    saveCart();
    renderCart();
  }

  function removeItem(key){
    delete cart[key];
    saveCart();
    renderCart();
  }

  function cartTotal(){
    var total = 0;
    for (var key in cart){
      var p = findProduct(baseId(key));
      if (p) total += p.price * cart[key].qty;
    }
    return total;
  }

  function cartCountTotal(){
    var count = 0;
    for (var key in cart) count += cart[key].qty;
    return count;
  }

  function renderCart(){
    var body = document.getElementById('drawerBody');
    var keys = Object.keys(cart);
    document.getElementById('cartCount').textContent = cartCountTotal();
    document.getElementById('cartTotal').textContent = fmt(cartTotal());
    document.getElementById('checkoutBtn').disabled = keys.length === 0;

    if (keys.length === 0){
      body.innerHTML = '<div class="drawer-empty">Seu pedido está vazio.<br>Adicione cortes do cardápio.</div>';
      return;
    }
    body.innerHTML = '';
    keys.forEach(function(key){
      var p = findProduct(baseId(key));
      if (!p) return;
      var item = cart[key];
      var nameLabel = p.name + (item.variant ? ' — ' + item.variant : '');
      var row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML =
        '<div style="flex:1;">' +
          '<div class="ci-name">' + nameLabel + '</div>' +
          '<div class="ci-meta">' + fmt(p.price) + ' / ' + p.unit + '</div>' +
          '<div class="qty-row">' +
            '<button class="qty-btn" data-action="dec" data-id="' + key + '">−</button>' +
            '<span class="qty-val">' + item.qty + '</span>' +
            '<button class="qty-btn" data-action="inc" data-id="' + key + '">+</button>' +
          '</div>' +
        '</div>' +
        '<div style="text-align:right;">' +
          '<div class="ci-meta">' + fmt(p.price * item.qty) + '</div>' +
          '<button class="remove-link" data-action="remove" data-id="' + key + '">Remover</button>' +
        '</div>';
      body.appendChild(row);
    });
  }

  function showToast(msg){
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(showToast._tm);
    showToast._tm = setTimeout(function(){ t.classList.remove('show'); }, 1800);
  }

  function buildWhatsAppMessage(){
    var lines = ['Olá! Quero fazer um pedido no Marcelo das Carnes:', ''];
    Object.keys(cart).forEach(function(key){
      var p = findProduct(baseId(key));
      if (!p) return;
      var item = cart[key];
      var nameLabel = p.name + (item.variant ? ' (' + item.variant + ')' : '');
      lines.push('- ' + nameLabel + ' x' + item.qty + ' (' + fmt(p.price) + '/' + p.unit + ')');
    });
    lines.push('');
    lines.push('Total estimado: ' + fmt(cartTotal()));
    lines.push('Forma: ' + (fulfilMode === 'retirada' ? 'Retirada na loja' : 'Entrega'));
    return lines.join('\n');
  }

  // Events
  document.getElementById('tabs').addEventListener('click', function(e){
    var btn = e.target.closest('.tab');
    if (!btn) return;
    document.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
    btn.classList.add('active');
    currentCat = btn.getAttribute('data-cat');
    renderProducts();
  });

  document.getElementById('productGrid').addEventListener('click', function(e){
    var btn = e.target.closest('.add-btn');
    if (!btn) return;
    handleAddClick(btn.getAttribute('data-id'));
  });

  document.getElementById('variantOptions').addEventListener('click', function(e){
    var btn = e.target.closest('.variant-option');
    if (!btn || !pendingVariantProductId) return;
    addToCart(pendingVariantProductId, btn.getAttribute('data-variant'));
    closeVariantModal();
  });
  document.getElementById('variantClose').addEventListener('click', closeVariantModal);
  document.getElementById('variantOverlay').addEventListener('click', closeVariantModal);

  document.getElementById('drawerBody').addEventListener('click', function(e){
    var btn = e.target.closest('button');
    if (!btn) return;
    var id = btn.getAttribute('data-id');
    var action = btn.getAttribute('data-action');
    if (action === 'inc') changeQty(id, 1);
    else if (action === 'dec') changeQty(id, -1);
    else if (action === 'remove') removeItem(id);
  });

  document.getElementById('fulfilToggle').addEventListener('click', function(e){
    var btn = e.target.closest('button');
    if (!btn) return;
    fulfilMode = btn.getAttribute('data-mode');
    document.querySelectorAll('#fulfilToggle button').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
  });

  document.getElementById('checkoutBtn').addEventListener('click', function(){
    if (Object.keys(cart).length === 0) return;
    var msg = encodeURIComponent(buildWhatsAppMessage());
    var phone = '5585991432058'; // WhatsApp do açougue
    window.open('https://wa.me/' + phone + '?text=' + msg, '_blank');
  });

  function openDrawer(){
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('overlay').classList.add('open');
  }
  function closeDrawer(){
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  }
  document.getElementById('openCart').addEventListener('click', openDrawer);
  document.getElementById('closeCart').addEventListener('click', closeDrawer);
  document.getElementById('overlay').addEventListener('click', closeDrawer);

  document.getElementById('navToggle').addEventListener('click', function(){
    document.getElementById('mainNav').classList.toggle('open');
  });
  document.querySelectorAll('#mainNav a').forEach(function(a){
    a.addEventListener('click', function(){ document.getElementById('mainNav').classList.remove('open'); });
  });

  loadCart();
  renderProducts();
  renderCart();
})();
