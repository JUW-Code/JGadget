const PRODUCTS = [
  // iPhone Series (X to 16 Pro Max)
  {
    id: 'ip-x', title: 'iPhone X', subtitle: '64GB | Super Retina OLED', price: 123800,
    desc: 'The iPhone X introduced Face ID, an all-screen OLED Super Retina display, and wireless charging — a revolutionary design milestone from Apple.',
    category: 'iphone', colors: ['Space Gray', 'Silver'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-x-select-2017?wid=940&hei=1112&fmt=png-alpha', badge: 'Budget Pick'
  },

  {
    id: 'ip-xr', title: 'iPhone XR', subtitle: '64GB | Liquid Retina | A12', price: 147920,
    desc: 'The iPhone XR packs a 6.1" Liquid Retina display, the powerful A12 Bionic chip, and impressive all-day battery life. Comes in vibrant colors.',
    category: 'iphone', colors: ['Black', 'White', 'Red', 'Blue', 'Yellow', 'Coral'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-select-201809?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-xs', title: 'iPhone XS', subtitle: '64GB | Stainless Steel | A12', price: 157300,
    desc: 'The iPhone XS features surgical-grade stainless steel, the A12 Bionic chip, and the most durable glass ever in a smartphone.',
    category: 'iphone', colors: ['Space Gray', 'Silver', 'Gold'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-select-2018?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-xs-max', title: 'iPhone XS Max', subtitle: '256GB | 6.5" OLED', price: 172040,
    desc: 'The largest iPhone yet with a stunning 6.5" OLED display, A12 Bionic chip, and enhanced dual cameras for breathtaking photography.',
    category: 'iphone', colors: ['Space Gray', 'Silver', 'Gold'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-select-2018?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-11', title: 'iPhone 11', subtitle: '64GB | Dual Camera | Night Mode', price: 204200,
    desc: 'iPhone 11 features a 6.1" Liquid Retina display, dual-camera system with Night mode, and the fast A13 Bionic chip.',
    category: 'iphone', colors: ['Black', 'White', 'Green', 'Yellow', 'Purple', 'Product Red'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-black-select-2019?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-11-pro', title: 'iPhone 11 Pro', subtitle: '256GB | Triple Camera', price: 271200,
    desc: 'The Pro model with a triple-camera system. Super Retina XDR display, A13 Bionic, and incredible battery life.',
    category: 'iphone', colors: ['Midnight Green', 'Space Gray', 'Silver', 'Gold'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-11-pm', title: 'iPhone 11 Pro Max', subtitle: '256GB | 6.5" Pro', price: 334180,
    desc: 'The biggest Pro with a massive 6.5" Super Retina XDR display, triple pro cameras, and the longest battery life ever in an iPhone at that time.',
    category: 'iphone', colors: ['Midnight Green', 'Space Gray', 'Silver', 'Gold'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-12', title: 'iPhone 12', subtitle: '128GB | 5G | Ceramic Shield', price: 269860,
    desc: 'iPhone 12 brings 5G, Ceramic Shield, and A14 Bionic — all in a sleek flat-edge aluminum design.',
    category: 'iphone', colors: ['Blue', 'Green', 'Black', 'White', 'Red', 'Purple'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-12-pro', title: 'iPhone 12 Pro', subtitle: '256GB | LiDAR | ProRAW', price: 351600,
    desc: 'iPhone 12 Pro features stainless steel design, ProRAW photography, LiDAR Scanner, and 5G with A14 Bionic.',
    category: 'iphone', colors: ['Pacific Blue', 'Graphite', 'Silver', 'Gold'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-pacific-blue-select?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-12-pm', title: 'iPhone 12 Pro Max', subtitle: '256GB | 6.7"', price: 415920,
    desc: 'The ultimate 12 Pro with the largest camera system, sensor-shift OIS, and a 6.7" Super Retina XDR display.',
    category: 'iphone', colors: ['Pacific Blue', 'Graphite', 'Silver', 'Gold'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-pacific-blue-select?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-13', title: 'iPhone 13', subtitle: '128GB | Cinematic Mode', price: 351600,
    desc: 'iPhone 13 introduces Cinematic video mode, an advanced dual-camera system, and the A15 Bionic chip.',
    category: 'iphone', colors: ['Midnight', 'Starlight', 'Blue', 'Pink', 'Green', 'Product Red'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-black-select-2021?wid=940&hei=1112&fmt=png-alpha', badge: 'Popular'
  },

  {
    id: 'ip-13-pro', title: 'iPhone 13 Pro', subtitle: '256GB | 120Hz | Macro', price: 432000,
    desc: 'iPhone 13 Pro brings ProMotion 120Hz display, Macro photography, and ProRes video.',
    category: 'iphone', colors: ['Alpine Green', 'Sierra Blue', 'Space Gray', 'Silver', 'Gold'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-green-select?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-13-pm', title: 'iPhone 13 Pro Max', subtitle: '256GB | 6.7"', price: 545900,
    desc: 'Best battery life and biggest display in any Pro iPhone at launch. ProMotion 120Hz and macro photos.',
    category: 'iphone', colors: ['Alpine Green', 'Sierra Blue', 'Space Gray', 'Silver', 'Gold'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-14', title: 'iPhone 14', subtitle: '128GB | Crash Detection', price: 432000,
    desc: 'iPhone 14 introduces Crash Detection, Emergency SOS via satellite, and all-day battery life.',
    category: 'iphone', colors: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Product Red', 'Yellow'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-14-pro', title: 'iPhone 14 Pro', subtitle: '256GB | Dynamic Island', price: 594140,
    desc: 'iPhone 14 Pro introduces Dynamic Island, the first 48 MP Pro camera, and Always-On display.',
    category: 'iphone', colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-14-pm', title: 'iPhone 14 Pro Max', subtitle: '256GB | 6.7" Pro', price: 700000,
    desc: 'The pinnacle of iPhone 14. Always-On display, 48 MP Pro cameras, and Dynamic Island.',
    category: 'iphone', colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=940&hei=1112&fmt=png-alpha', badge: 'Best Value'
  },

  {
    id: 'ip-15', title: 'iPhone 15', subtitle: '128GB | USB-C | 48MP', price: 639700,
    desc: 'iPhone 15 upgrades to USB-C, brings a 48 MP main camera, and Dynamic Island.',
    category: 'iphone', colors: ['Pink', 'Yellow', 'Blue', 'Green', 'Black'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-15-pro', title: 'iPhone 15 Pro', subtitle: '256GB | Titanium', price: 825960,
    desc: 'iPhone 15 Pro is forged in aerospace-grade titanium. Customisable Action Button and A17 Pro chip.',
    category: 'iphone', colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-natural-titanium-select?wid=940&hei=1112&fmt=png-alpha', badge: ''
  },

  {
    id: 'ip-15-pm', title: 'iPhone 15 Pro Max', subtitle: '256GB | 5x Zoom', price: 923780,
    desc: 'The first iPhone with 5x optical zoom. Lightweight titanium build and A17 Pro chip.',
    category: 'iphone', colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-blue-titanium-select?wid=940&hei=1112&fmt=png-alpha', badge: 'Top Seller'
  },

  {
    id: 'ip-16', title: 'iPhone 16', subtitle: '128GB | Camera Control', price: 963980,
    desc: 'iPhone 16 introduces Camera Control, 48 MP Fusion camera, and A18 chip.',
    category: 'iphone', colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha', badge: 'New'
  },

  {
    id: 'ip-16-pro', title: 'iPhone 16 Pro', subtitle: '256GB | A18 Pro', price: 1288260,
    desc: 'iPhone 16 Pro features A18 Pro chip, 4K 120fps video, and a 5x telephoto camera.',
    category: 'iphone', colors: ['Desert Titanium', 'Natural Titanium', 'White Titanium', 'Black Titanium'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=940&hei=1112&fmt=png-alpha', badge: 'New'
  },

  {
    id: 'ip-16-pm', title: 'iPhone 16 Pro Max', subtitle: '256GB | 6.9"', price: 1638000,
    desc: 'The most advanced iPhone ever. A18 Pro chip, 6.9" display, and the best battery life.',
    category: 'iphone', colors: ['Natural Titanium', 'Desert Titanium', 'White Titanium', 'Black Titanium'],
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-finish-select-202409-6-9inch-naturaltitanium?wid=940&hei=1112&fmt=png-alpha', badge: '🔥 Flagship'
  },

  {
    id: 'ss-s25u', title: 'Samsung Galaxy S25 Ultra', subtitle: '256GB | S Pen', price: 1571000,
    desc: 'Galaxy S25 Ultra with S Pen, Snapdragon 8 Elite, and 200 MP camera.',
    category: 'samsung', colors: ['Titanium Black', 'Titanium Gray', 'Titanium White Silver', 'Titanium Blue Black'],
    img: 'https://placehold.co/600x600/111/FFF?text=S25+Ultra', badge: '🔥 Flagship'
  }
];

function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }
function formatNaira(n) { return '\u20a6' + n.toLocaleString('en-NG'); }

function getCart() { return JSON.parse(localStorage.getItem('jg_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('jg_cart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  qsa('#cart-count, #cart-count-2, #cart-count-3').forEach(n => { if (n) n.textContent = count; });
}

function initMenuToggle() {
  qsa('#menu-toggle, #menu-toggle-2, #menu-toggle-3').forEach(btn => {
    if (!btn) return;
    const idSuffix = btn.id.split('-').pop(); // "", "2", etc
    const menu = document.getElementById(idSuffix && idSuffix !== 'toggle' ? `mobile-menu-${idSuffix}` : 'mobile-menu');
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (menu) menu.hidden = open;
    });
  });
}

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
            <li><a href="shop.html?cat=iphone">iPhones</a></li>
            <li><a href="shop.html?cat=samsung">Samsung</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <ul>
            <li><a href="track.html">Track Order</a></li>
            <li><a href="index.html#how-it-works">How It Works</a></li>
            <li><a href="index.html#contact">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
            <li><a href="https://wa.me/2348113037077" target="_blank">WhatsApp</a></li>
            <li><a href="mailto:onikosijuwon6@gmail.com">Email</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 JGadget Inc. All rights reserved.</div>
    </div>
  `;
  qsa('.site-footer').forEach(el => el.innerHTML = html);
}

function renderProducts(filter = 'all') {
  const grid = qs('#product-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const items = PRODUCTS.filter(p => filter === 'all' ? true : p.category === filter);
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <h4>${p.title}</h4>
      <p class="product-subtitle">${p.subtitle || ''}</p>
      <div class="price">${formatNaira(p.price)}</div>
      <div class="card-actions">
        <button class="btn add-cart" data-id="${p.id}">Add</button>
        <button class="btn btn-primary view" data-id="${p.id}">Preorder</button>
      </div>
    `;
    grid.appendChild(card);
  });
  qsa('.add-cart').forEach(b => b.addEventListener('click', () => { addToCart(b.dataset.id, 1); alert('Added to cart!'); }));
  qsa('.view').forEach(b => b.addEventListener('click', () => { window.location.href = `product.html?id=${b.dataset.id}`; }));
}

function renderProductPage() {
  const el = qs('#product-page');
  if (!el) return;
  const id = new URLSearchParams(location.search).get('id');
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  el.innerHTML = `
    <div class="product-detail">
      <img src="${p.img}" alt="${p.title}">
      <div class="product-meta">
        <h2>${p.title}</h2>
        <p class="price" style="font-size:2rem;margin:10px 0">${formatNaira(p.price)}</p>
        <p>${p.desc}</p>
        <div style="margin:20px 0">
          <p style="font-size:0.9rem;color:var(--muted);margin-bottom:8px">Select Color:</p>
          <div class="color-picker" style="display:flex;gap:10px">
            ${(p.colors || []).map(c => `
              <button class="color-btn" style="background:${colorToHex(c)};width:30px;height:30px;border-radius:50%;border:2px solid transparent;cursor:pointer" title="${c}" onclick="this.parentElement.querySelectorAll('.color-btn').forEach(b=>b.style.borderColor='transparent');this.style.borderColor='#fff'"></button>
            `).join('')}
          </div>
        </div>
        <button class="btn btn-primary btn-large" id="preorder-now" style="width:100%">Preorder Now</button>
      </div>
    </div>
  `;
  qs('#preorder-now')?.addEventListener('click', () => { addToCart(p.id, 1); window.location.href = 'order.html'; });
}

function colorToHex(c) {
  const map = {
    'Space Gray': '#4e4e4e', 'Silver': '#c0c0c0', 'Black': '#000', 'White': '#fff',
    'Red': '#ff0000', 'Blue': '#0000ff', 'Yellow': '#ffff00', 'Coral': '#ff7f50',
    'Gold': '#ffd700', 'Green': '#008000', 'Purple': '#800080', 'Midnight Green': '#004953',
    'Midnight': '#191970', 'Starlight': '#F5F5DC', 'Pink': '#ffc0cb', 'Alpine Green': '#4f7942',
    'Sierra Blue': '#87ceeb', 'Deep Purple': '#3b0a50', 'Space Black': '#1b1b1b',
    'Natural Titanium': '#beb7a4', 'Blue Titanium': '#4e5a6a', 'White Titanium': '#f2f1ef',
    'Black Titanium': '#434344', 'Ultramarine': '#3f00ff', 'Teal': '#008080',
    'Desert Titanium': '#c19a6b', 'Titanium Black': '#3b3b3b', 'Titanium Gray': '#888',
    'Titanium White Silver': '#ddd', 'Titanium Blue Black': '#2a3a4a'
  };
  return map[c] || '#ccc';
}

function initAuth() {
  const signup = qs('#signup-form');
  const login = qs('#login-form');
  const status = qs('#auth-status');
  const logoutBtn = qsa('#logout-btn');
  const signupMsg = qs('#signup-message');

  if (signup) {
    signup.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(signup);
      const user = { name: fd.get('name'), email: fd.get('email'), password: fd.get('password') };
      localStorage.setItem('jg_user_' + user.email, JSON.stringify(user));
      if (signupMsg) { signupMsg.hidden = false; signupMsg.textContent = 'Account created! Redirecting to login...'; }
      setTimeout(() => { window.location.href = 'login.html'; }, 1500);
    });
  }

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

  const session = localStorage.getItem('jg_session');
  if (session) {
    const user = JSON.parse(session);
    if (qs('#user-name-display')) qs('#user-name-display').textContent = user.name;
    if (qs('#user-email-display')) qs('#user-email-display').textContent = user.email;
    if (qs('#account-content')) qs('#account-content').hidden = false;
    if (qs('#guest-content')) qs('#guest-content').hidden = true;
    logoutBtn.forEach(b => b.style.display = 'block');

    // Render Order History
    const historyBody = qs('#order-history-body');
    if (historyBody) {
      const orders = JSON.parse(localStorage.getItem('jg_orders') || '[]');
      const myOrders = orders.filter(o => o.email === user.email);
      if (myOrders.length > 0) {
        historyBody.innerHTML = myOrders.map(o => `
          <tr>
            <td><strong>${o.id}</strong></td>
            <td>${o.date || new Date().toLocaleDateString()}</td>
            <td>${o.items?.length || 0}</td>
            <td>${formatNaira(o.total || 0)}</td>
            <td><span class="badge" style="background:#f59e0b">${o.status}</span></td>
          </tr>
        `).join('');
      }
    }
  }

  logoutBtn.forEach(b => b.addEventListener('click', () => {
    localStorage.removeItem('jg_session');
    window.location.href = 'index.html';
  }));
}

function initCheckout() {
  const form = qs('#checkout-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const order = {
      id: 'ORD-' + Date.now(),
      name: data.get('name'),
      email: data.get('email'),
      address: data.get('address'),
      phone: data.get('phone'),
      payment: data.get('payment'),
      total: getCart().reduce((s, i) => { const p = PRODUCTS.find(x => x.id === i.id); return s + (p?.price * i.qty || 0); }, 0),
      items: getCart(),
      status: 'Processing'
    };

    // Save locally
    const orders = JSON.parse(localStorage.getItem('jg_orders') || '[]');
    orders.unshift(order);
    localStorage.setItem('jg_orders', JSON.stringify(orders));

    fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    }).then(() => {
      localStorage.removeItem('jg_cart');
      alert('Order Placed! Check your email.');
      window.location.href = 'account.html';
    });
  });
}

const TRACK_STEPS_CONFIG = [
  { id: 'step-confirmed', label: 'Order Confirmed', icon: '✅' },
  { id: 'step-sourcing', label: 'Sourcing & Packaging', icon: '🏭' },
  { id: 'step-shipping', label: 'International Shipping', icon: '✈️' },
  { id: 'step-customs', label: 'Nigeria Customs', icon: '🇳🇬' },
  { id: 'step-sort', label: 'Lagos Sort Center', icon: '📦' },
  { id: 'step-delivery', label: 'Out for Delivery', icon: '🚚' },
  { id: 'step-delivered', label: 'Delivered', icon: '🏠' },
];

function initTracking() {
  const form = qs('#track-form');
  const btn = qs('#track-btn');
  const input = qs('#track-id');
  if (!form && !btn) return;

  function handleTrack(ev) {
    if (ev) ev.preventDefault();
    const id = input.value.trim();
    if (!id) return;

    fetch(`http://localhost:3000/api/orders/${id}`)
      .then(res => res.json())
      .then(order => {
        const resultEl = qs('#track-result');
        const errorEl = qs('#track-error');
        if (order.error) {
          if (resultEl) resultEl.hidden = true;
          if (errorEl) errorEl.hidden = false;
          return;
        }
        if (errorEl) errorEl.hidden = true;
        if (resultEl) {
          resultEl.hidden = false;
          qs('#track-order-id').textContent = order.id;
          qs('#track-order-status').textContent = order.status;
          // Render 7-step timeline logic here if needed or just simple status
          // (Keeping it consistent with track.html structure)
        }
      });
  }

  if (form) form.addEventListener('submit', handleTrack);
  if (btn) btn.addEventListener('click', handleTrack);
}

// Payment method toggle
function initPaymentToggle() {
  const paySelect = qs('#payment-method');
  const cardDetails = qs('#card-details');
  const bankDetails = qs('#bank-details');
  if (!paySelect) return;
  function toggle() {
    const val = paySelect.value;
    if (cardDetails) cardDetails.style.display = val === 'card' ? 'block' : 'none';
    if (bankDetails) bankDetails.style.display = val === 'transfer' ? 'block' : 'none';
  }
  paySelect.addEventListener('change', toggle);
  toggle();
}

document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  renderFooter();
  if (qs('#product-grid')) renderProducts();
  if (qs('#product-page')) renderProductPage();
  if (qs('#checkout-form')) initCheckout();
  initTracking();
  initAuth();
  initPaymentToggle();
  updateCartCount();

  // Header cart buttons
  qsa('#cart-btn, #cart-btn-2, #cart-btn-3').forEach(b => b.addEventListener('click', () => window.location.href = 'order.html'));
});
