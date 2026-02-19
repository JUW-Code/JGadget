// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
//  JGADGET PRODUCTS  |  Prices in Naira (â‚¦)
//  Rate: $1 = â‚¦1,340  |  +â‚¦30,000 profit
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PRODUCTS = [

  // â”€â”€ iPhone Series (X â†’ 16 Pro Max) â”€â”€â”€â”€â”€â”€
  {
    id: 'ip-x',
    title: 'iPhone X',
    subtitle: '64GB | Space Gray',
    price: 123800,   // $70 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/0a0a0a/FFFFFF?text=iPhone+X',
    badge: 'Budget Pick'
  },
  {
    id: 'ip-xr',
    title: 'iPhone XR',
    subtitle: '64GB | Black',
    price: 147920,   // $88 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/0a0a0a/FFFFFF?text=iPhone+XR',
    badge: ''
  },
  {
    id: 'ip-xs',
    title: 'iPhone XS',
    subtitle: '64GB | Silver',
    price: 157300,   // $95 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/0a0a0a/FFFFFF?text=iPhone+XS',
    badge: ''
  },
  {
    id: 'ip-xs-max',
    title: 'iPhone XS Max',
    subtitle: '256GB | Gold',
    price: 172040,   // $106 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/0a0a0a/FFFFFF?text=iPhone+XS+Max',
    badge: ''
  },
  {
    id: 'ip-11',
    title: 'iPhone 11',
    subtitle: '64GB | Black',
    price: 204200,   // $130 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/0a0a0a/FFFFFF?text=iPhone+11',
    badge: ''
  },
  {
    id: 'ip-11-pro',
    title: 'iPhone 11 Pro',
    subtitle: '256GB | Midnight Green',
    price: 271200,   // $180 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/1a2e1a/FFFFFF?text=iPhone+11+Pro',
    badge: ''
  },
  {
    id: 'ip-11-pm',
    title: 'iPhone 11 Pro Max',
    subtitle: '256GB | Space Gray',
    price: 334180,   // $227 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/111/FFFFFF?text=iPhone+11+Pro+Max',
    badge: ''
  },
  {
    id: 'ip-12',
    title: 'iPhone 12',
    subtitle: '128GB | Blue',
    price: 269860,   // $179 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/1a2040/FFFFFF?text=iPhone+12',
    badge: ''
  },
  {
    id: 'ip-12-pro',
    title: 'iPhone 12 Pro',
    subtitle: '256GB | Pacific Blue',
    price: 351600,   // $240 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/1a2040/FFFFFF?text=iPhone+12+Pro',
    badge: ''
  },
  {
    id: 'ip-12-pm',
    title: 'iPhone 12 Pro Max',
    subtitle: '256GB | Pacific Blue',
    price: 415920,   // $288 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/1a2040/FFFFFF?text=iPhone+12+Pro+Max',
    badge: ''
  },
  {
    id: 'ip-13',
    title: 'iPhone 13',
    subtitle: '128GB | Midnight',
    price: 351600,   // $240 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/0a0a0a/FFFFFF?text=iPhone+13',
    badge: 'Popular'
  },
  {
    id: 'ip-13-pro',
    title: 'iPhone 13 Pro',
    subtitle: '256GB | Alpine Green',
    price: 432000,   // $300 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/1a3025/FFFFFF?text=iPhone+13+Pro',
    badge: ''
  },
  {
    id: 'ip-13-pm',
    title: 'iPhone 13 Pro Max',
    subtitle: '256GB | Sierra Blue',
    price: 545900,   // $385 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/2a3a4a/FFFFFF?text=iPhone+13+Pro+Max',
    badge: ''
  },
  {
    id: 'ip-14',
    title: 'iPhone 14',
    subtitle: '128GB | Purple',
    price: 432000,   // $300 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/2a1a3a/FFFFFF?text=iPhone+14',
    badge: ''
  },
  {
    id: 'ip-14-pro',
    title: 'iPhone 14 Pro',
    subtitle: '256GB | Deep Purple',
    price: 594140,   // $421 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/1e0a3a/FFFFFF?text=iPhone+14+Pro',
    badge: ''
  },
  {
    id: 'ip-14-pm',
    title: 'iPhone 14 Pro Max',
    subtitle: '256GB | Space Black',
    price: 700000,   // $500 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/080808/FFFFFF?text=iPhone+14+Pro+Max',
    badge: 'Best Value'
  },
  {
    id: 'ip-15',
    title: 'iPhone 15',
    subtitle: '128GB | Pink',
    price: 639700,   // $455 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/3a1a2a/FFFFFF?text=iPhone+15',
    badge: ''
  },
  {
    id: 'ip-15-pro',
    title: 'iPhone 15 Pro',
    subtitle: '256GB | Natural Titanium',
    price: 825960,   // $594 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/2a2520/FFFFFF?text=iPhone+15+Pro',
    badge: ''
  },
  {
    id: 'ip-15-pm',
    title: 'iPhone 15 Pro Max',
    subtitle: '256GB | Blue Titanium',
    price: 923780,   // $667 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/1a2030/FFFFFF?text=iPhone+15+Pro+Max',
    badge: 'Top Seller'
  },
  {
    id: 'ip-16',
    title: 'iPhone 16',
    subtitle: '128GB | Ultramarine',
    price: 963980,   // $697 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/1a2050/FFFFFF?text=iPhone+16',
    badge: 'New'
  },
  {
    id: 'ip-16-pro',
    title: 'iPhone 16 Pro',
    subtitle: '256GB | Desert Titanium',
    price: 1288260,  // $939 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/3a3020/FFFFFF?text=iPhone+16+Pro',
    badge: 'New'
  },
  {
    id: 'ip-16-pm',
    title: 'iPhone 16 Pro Max',
    subtitle: '256GB | Natural Titanium',
    price: 1638000,  // $1200 Ã— 1340 + 30k
    category: 'iphone',
    img: 'https://placehold.co/600x600/2a2520/FFFFFF?text=iPhone+16+Pro+Max',
    badge: 'ðŸ”¥ Flagship'
  },

  // â”€â”€ Samsung Series â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'ss-s25u',
    title: 'Samsung S25 Ultra',
    subtitle: '256GB | Titanium Gray',
    price: 1571000,  // ~$1150 Ã— 1340 + 30k
    category: 'samsung',
    img: 'https://placehold.co/600x600/0a0a0a/FFFFFF?text=S25+Ultra',
    badge: 'ðŸ”¥ Flagship'
  },
  {
    id: 'ss-s25p',
    title: 'Samsung S25 Plus',
    subtitle: '256GB | Navy',
    price: 1084580,  // ~$787 Ã— 1340 + 30k
    category: 'samsung',
    img: 'https://placehold.co/600x600/0a1a3a/FFFFFF?text=S25+Plus',
    badge: 'New'
  },
  {
    id: 'ss-s25',
    title: 'Samsung Galaxy S25',
    subtitle: '128GB | Icy Blue',
    price: 825960,   // ~$594 Ã— 1340 + 30k
    category: 'samsung',
    img: 'https://placehold.co/600x600/1a3040/FFFFFF?text=Galaxy+S25',
    badge: ''
  },
  {
    id: 'ss-fold6',
    title: 'Samsung Z Fold 6',
    subtitle: '256GB | Crafted Black',
    price: 2140500,  // ~$1575 Ã— 1340 + 30k
    category: 'samsung',
    img: 'https://placehold.co/600x600/080808/FFFFFF?text=Z+Fold+6',
    badge: 'Premium'
  },

  // â”€â”€ Audio â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'a1',
    title: 'AirPods Pro 2',
    subtitle: 'USB-C | White',
    price: 310060,   // ~$209 Ã— 1340 + 30k
    category: 'audio',
    img: 'https://placehold.co/600x600/F0F0F0/111?text=AirPods+Pro+2',
    badge: ''
  },
  {
    id: 'a2',
    title: 'Galaxy Buds 3 Pro',
    subtitle: 'Silver',
    price: 269860,   // ~$179 Ã— 1340 + 30k
    category: 'audio',
    img: 'https://placehold.co/600x600/DDD/111?text=Galaxy+Buds+3',
    badge: ''
  },
  {
    id: 'a3',
    title: 'Sony WH-1000XM5',
    subtitle: 'Wireless Noise Cancelling',
    price: 432000,   // ~$300 Ã— 1340 + 30k
    category: 'audio',
    img: 'https://placehold.co/600x600/1a1a1a/FFFFFF?text=Sony+XM5',
    badge: 'Best ANC'
  },

  // â”€â”€ Wearables â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'w1',
    title: 'Apple Watch Ultra 2',
    subtitle: 'Titanium | Ocean Band',
    price: 923780,   // ~$667 Ã— 1340 + 30k
    category: 'wearable',
    img: 'https://placehold.co/600x600/2a2a2a/FFFFFF?text=Watch+Ultra+2',
    badge: ''
  },
  {
    id: 'w2',
    title: 'Apple Watch Series 10',
    subtitle: '46mm | Aluminum',
    price: 557960,   // ~$394 Ã— 1340 + 30k
    category: 'wearable',
    img: 'https://placehold.co/600x600/1a1a1a/FFFFFF?text=Watch+Series+10',
    badge: ''
  },
  {
    id: 'w3',
    title: 'Galaxy Watch 7',
    subtitle: '44mm | Green',
    price: 346240,   // ~$236 Ã— 1340 + 30k
    category: 'wearable',
    img: 'https://placehold.co/600x600/0a2010/FFFFFF?text=Galaxy+Watch+7',
    badge: ''
  }
];

function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }


function initMenuToggle() {
  qsa('#menu-toggle, #menu-toggle-2, #menu-toggle-3').forEach(btn => {
    if (!btn) return;
    const idSuffix = btn.id.split('-').pop(); // "", "2", etc
    const menu = document.getElementById(idSuffix ? `mobile-menu-${idSuffix}` : 'mobile-menu') || document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (menu) menu.hidden = open;
    });
  });
}

function getCart() { return JSON.parse(localStorage.getItem('jg_cart') || '[]') }
function saveCart(cart) { localStorage.setItem('jg_cart', JSON.stringify(cart)); updateCartCount(); }
function addToCart(productId, qty = 1) {
  const cart = getCart();
  const found = cart.find(i => i.id === productId);
  if (found) found.qty += qty; else cart.push({ id: productId, qty });
  saveCart(cart);
}
function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
}
function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  qsa('#cart-count, #cart-count-2, #cart-count-3').forEach(n => { if (n) n.textContent = count });
}

// Format price as Naira with commas
function formatNaira(n) { return 'â‚¦' + n.toLocaleString('en-NG'); }

function renderProducts(filter = 'all') {
  const grid = qs('#product-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const items = PRODUCTS.filter(p => filter === 'all' ? true : p.category === filter);
  if (items.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);padding:40px 0;">No products in this category yet.</p>';
    return;
  }
  items.forEach(p => {
    const card = document.createElement('div'); card.className = 'product-card';
    card.innerHTML = `
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <h4>${p.title}</h4>
      ${p.subtitle ? `<p class="product-subtitle">${p.subtitle}</p>` : ''}
      <div class="price">${formatNaira(p.price)}</div>
      <div class="card-actions">
        <div style="display:flex; gap:8px; align-items:center;">
          <input type="number" min="1" value="1" class="qty-input" id="qty-${p.id}">
          <button class="btn add-cart" data-id="${p.id}">Add</button>
        </div>
        <button class="btn btn-primary view" data-id="${p.id}">Preorder</button>
      </div>
    `;
    grid.appendChild(card);
  });

  qsa('.add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const qtyInput = document.getElementById(`qty-${id}`);
      const qty = parseInt(qtyInput.value) || 1;
      addToCart(id, qty);
      alert(`Added ${qty} item(s) to cart`);
    });
  });
  qsa('.view').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      window.location.href = `product.html?id=${id}`;
    });
  });
}

function renderProductPage() {
  const el = qs('#product-page');
  if (!el) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) { el.innerHTML = '<p>Product not found</p>'; return; }
  el.innerHTML = `
    <div class="product-detail">
      <div><img src="${p.img}" alt="${p.title}"></div>
      <div class="product-meta">
        ${p.badge ? `<span class="product-badge" style="display:inline-block;margin-bottom:12px">${p.badge}</span>` : ''}
        <h2>${p.title}</h2>
        ${p.subtitle ? `<p style="color:var(--text-muted);margin:0 0 12px">${p.subtitle}</p>` : ''}
        <p class="price" style="font-size:2rem;margin:0 0 20px">${formatNaira(p.price)}</p>
        <p style="color:var(--text-muted);margin:0 0 8px">ðŸ“¦ Delivery: 14â€“21 days to Nigeria</p>
        <p style="color:var(--text-muted);margin:0 0 24px">âœ… 100% Original &nbsp;|&nbsp; ðŸ”’ Secure Payment</p>

        <div style="display:flex;gap:12px;margin-top:12px;align-items:center">
          <input type="number" min="1" value="1" class="qty-input" id="qty-single">
          <button class="btn" id="add-cart-single">Add to Cart</button>
          <a class="btn btn-primary" id="buy-now-single" href="order.html">Preorder Now</a>
        </div>
      </div>
    </div>
  `;

  qs('#add-cart-single').addEventListener('click', () => {
    const qty = parseInt(qs('#qty-single').value) || 1;
    addToCart(p.id, qty);
    alert(`Added ${qty} item(s) to cart`);
  });

  qs('#buy-now-single').addEventListener('click', () => {
    addToCart(p.id, 1);
    // redirect to order page (cart loaded there)
  });
}

function renderCartPage() {
  const el = qs('#cart-items');
  if (!el) return;
  const cart = getCart();
  if (cart.length === 0) { el.innerHTML = '<p>Your cart is empty.</p>'; return; }

  el.innerHTML = '';
  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const row = document.createElement('div'); row.className = 'cart-row';
    row.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div style="flex:1">
        <strong>${p.title}</strong>
        <div class="muted">$${p.price.toFixed(2)} x ${item.qty} = <strong>$${(p.price * item.qty).toFixed(2)}</strong></div>
      </div>
      <div>
        <button class="btn remove" data-id="${item.id}">Remove</button>
      </div>
    `;
    el.appendChild(row);
  });

  qsa('.remove').forEach(b => {
    b.addEventListener('click', () => {
      removeFromCart(b.dataset.id);
      renderCartPage();
    });
  });
}

function initCheckout() {
  const form = qs('#checkout-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const order = {
      id: 'ORD-' + Math.floor(Math.random() * 100000),
      date: new Date().toLocaleDateString(),
      name: data.get('name'),
      email: data.get('email'),
      address: data.get('address'),
      phone: data.get('phone'),
      payment: data.get('payment'),
      items: getCart(),
      status: 'Processing',
      total: getCart().reduce((s, it) => {
        const p = PRODUCTS.find(x => x.id === it.id); return s + (p.price * it.qty);
      }, 0)
    };

    // 1. Save locally (for UI persistence)
    const orders = JSON.parse(localStorage.getItem('jg_orders') || '[]');
    orders.unshift(order); // Add to beginning
    localStorage.setItem('jg_orders', JSON.stringify(orders));

    // 2. Clear cart
    localStorage.removeItem('jg_cart');
    updateCartCount();
    renderCartPage();

    // 3. Send to Backend (Triggers Real Email)
    fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    }).catch(err => console.log('Backend offline or error:', err));

    // 4. Show Success Modal & Email Preview
    const modal = qs('#order-modal');
    const preview = qs('#email-preview-content');

    if (modal && preview) {
      modal.hidden = false;
      preview.innerHTML = `
         <strong>To:</strong> ${order.email}<br>
         <strong>Subject:</strong> Order Confirmation #${order.id}<br><br>
         Hi ${order.name},<br>
         Thanks for your order! We are getting your gadgets ready.<br>
         <strong>Total: $${order.total.toFixed(2)}</strong><br>
         Shipping to: ${order.address}
       `;

      qs('#close-modal').addEventListener('click', () => {
        window.location.href = 'account.html';
      });
    }
  });
}

/* Auth demo (localStorage) */
function initAuth() {
  const signup = qs('#signup-form');
  const login = qs('#login-form');
  const status = qs('#auth-status');
  const logoutBtn = qs('#logout-btn');
  const signupMsg = qs('#signup-message');

  // Signup Page Logic
  if (signup) {
    signup.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(signup);
      const user = { name: fd.get('name'), email: fd.get('email'), password: fd.get('password') };
      localStorage.setItem('jg_user_' + user.email, JSON.stringify(user));

      if (signupMsg) {
        signupMsg.hidden = false;
        signupMsg.textContent = `Account created successfully! Redirecting to login...`;
      }
      setTimeout(() => { window.location.href = 'login.html'; }, 1500);
    });
  }

  // Login Page Logic
  if (login) {
    login.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(login);
      const email = fd.get('email'); const pass = fd.get('password');
      const stored = localStorage.getItem('jg_user_' + email);

      if (!stored) { if (status) status.textContent = 'User not found.'; return; }

      const user = JSON.parse(stored);
      if (user.password !== pass) { if (status) status.textContent = 'Wrong password.'; return; }

      localStorage.setItem('jg_session', JSON.stringify({ email: user.email, name: user.name }));
      window.location.href = 'account.html';
    });
  }

  // Account Page Logic
  if (logoutBtn) {
    const session = localStorage.getItem('jg_session');

    if (!session) {
      if (qs('#account-content')) qs('#account-content').hidden = true;
      if (qs('#guest-content')) qs('#guest-content').hidden = false;
    } else {
      // Logged In
      const user = JSON.parse(session);
      if (qs('#user-name-display')) qs('#user-name-display').textContent = user.name;
      if (qs('#user-email-display')) qs('#user-email-display').textContent = user.email;

      if (qs('#account-content')) qs('#account-content').hidden = false;
      if (qs('#guest-content')) qs('#guest-content').hidden = true;
      logoutBtn.style.display = 'block';

      // Render History
      const historyBody = qs('#order-history-body');
      if (historyBody) {
        const allOrders = JSON.parse(localStorage.getItem('jg_orders') || '[]');
        // Filter orders for this user email
        const myOrders = allOrders.filter(o => o.email === user.email);

        if (myOrders.length === 0) {
          historyBody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:20px">No orders found.</td></tr>';
        } else {
          historyBody.innerHTML = myOrders.map(o => `
              <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.date}</td>
                <td>${o.items.length} Items</td>
                <td>$${o.total.toFixed(2)}</td>
                <td><span class="badge" style="background:${o.status === 'Processing' ? '#f59e0b' : '#10b981'};position:static">${o.status}</span></td>
              </tr>
            `).join('');
        }
      }
    }

    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('jg_session');
      window.location.href = 'index.html';
    });
  }
}

function initNewsletter() {
  const f = qs('#newsletter-form');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const email = qs('#newsletter-email').value;
    const list = JSON.parse(localStorage.getItem('jg_news') || '[]');
    list.push({ email, date: Date.now() });
    localStorage.setItem('jg_news', JSON.stringify(list));
    alert('Thank you for subscribing to our newsletter.');
    f.reset();
  });
}

function initShopSearch() {
  const f = qs('#shop-search');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const q = qs('#shop-search-input').value.toLowerCase();
    const results = PRODUCTS.filter(p => p.title.toLowerCase().includes(q));
    const grid = qs('#product-grid');
    if (!grid) return;
    grid.innerHTML = '';
    results.forEach(p => {
      const card = document.createElement('div'); card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h4>${p.title}</h4>
        <div class="rating">â­ ${p.rating}</div>
        <div class="price">$${p.price.toFixed(2)}</div>
        <div class="card-actions">
          <button class="btn add-cart" data-id="${p.id}">Add to Cart</button>
          <button class="btn btn-primary view" data-id="${p.id}">Buy Now</button>
        </div>`;
      grid.appendChild(card);
    });

    qsa('.add-cart').forEach(btn => btn.addEventListener('click', () => { addToCart(btn.dataset.id, 1); alert('Added to cart'); }));
    qsa('.view').forEach(btn => btn.addEventListener('click', () => window.location.href = `product.html?id=${btn.dataset.id}`));
  });
}

function wireHeaderCartButtons() {
  qsa('#cart-btn,#cart-btn-2,#cart-btn-3').forEach(b => {
    if (!b) return;
    b.addEventListener('click', () => window.location.href = 'order.html');
  });
}

/* Init on DOM loaded */
document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  updateCartCount();
  renderProducts('all');
  initShopSearch();
  initNewsletter();
  initAuth();
  renderProductPage();
  renderCartPage();
  initCheckout();
  wireHeaderCartButtons();

  // Category radios
  qsa('input[name="cat"]').forEach(r => {
    r.addEventListener('change', () => {
      renderProducts(r.value);
    });
  });
});

// Footer Injection
function renderFooter() {
  const html = `
    <div class="footer-grid">
      <div class="footer-col">
        <a href="index.html" class="logo" style="display:block;margin-bottom:20px;color:#fff;">JGadget</a>
        <p>Your premium destination for the latest flagship devices. Preorder today and be the first to experience the future.</p>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
            <li><a href="shop.html">All Products</a></li>
            <li><a href="shop.html?cat=phone">Phones</a></li>
            <li><a href="shop.html?cat=accessories">Accessories</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <ul>
            <li><a href="#">Order Status</a></li>
            <li><a href="support.html">Shipping Policy</a></li>
            <li><a href="support.html">Returns</a></li>
            <li><a href="support.html">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Social</h4>
        <ul>
            <li><a href="#">Twitter / X</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 JGadget Inc. All rights reserved.</div>
      <div style="display:flex;gap:20px">
        <a href="#" style="color:#888;text-decoration:none">Privacy</a>
        <a href="#" style="color:#888;text-decoration:none">Terms</a>
      </div>
    </div>
  `;

  qsa('.site-footer').forEach(el => el.innerHTML = html);
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
      mobileMenu.hidden = !isOpen;
    });
  }

  // Payment Toggle
  const paySelect = qs('#payment-method');
  const cardDetails = qs('#card-details');
  const bankDetails = qs('#bank-details');

  if (paySelect && cardDetails && bankDetails) {
    function toggle() {
      const val = paySelect.value;
      // Show card details only if 'card' is selected
      cardDetails.style.display = val === 'card' ? 'block' : 'none';
      // Show bank details only if 'transfer' is selected
      bankDetails.style.display = val === 'transfer' ? 'block' : 'none';

      // Update required attributes
      qsa('#card-details input').forEach(i => i.required = val === 'card');
    }
    paySelect.addEventListener('change', toggle);
    toggle(); // init
  }

  // Render Footer everywhere
  renderFooter();
});
