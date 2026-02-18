const PRODUCTS = [
  // Phones
  { id: 'p1', title: 'iPhone 16 Pro Max', price: 1199.00, category: 'phone', img: 'img/iphone16.png', rating: 5.0 },
  { id: 'p2', title: 'iPhone 16 Pro', price: 999.00, category: 'phone', img: 'https://placehold.co/600x600/222/FFF?text=iPhone+16+Pro', rating: 4.9 },
  { id: 'p3', title: 'iPhone 16', price: 799.00, category: 'phone', img: 'https://placehold.co/600x600/333/FFF?text=iPhone+16', rating: 4.8 },
  { id: 'p4', title: 'Samsung S25 Ultra', price: 1299.00, category: 'phone', img: 'img/samsung25.png', rating: 4.9 },
  { id: 'p5', title: 'Samsung S25 Plus', price: 999.00, category: 'phone', img: 'https://placehold.co/600x600/111/EEE?text=S25+Plus', rating: 4.7 },
  { id: 'p6', title: 'Samsung S25', price: 799.00, category: 'phone', img: 'https://placehold.co/600x600/222/EEE?text=Samsung+S25', rating: 4.6 },
  { id: 'p7', title: 'iPhone 15 Pro (Refurbished)', price: 899.00, category: 'phone', img: 'https://placehold.co/600x600/444/FFF?text=iPhone+15+Pro', rating: 4.5 },
  { id: 'p8', title: 'Samsung Z Fold 6', price: 1799.00, category: 'phone', img: 'https://placehold.co/600x600/000/FFF?text=Z+Fold+6', rating: 4.8 },
  // Audio
  { id: 'a1', title: 'AirPods Pro 2', price: 249.00, category: 'audio', img: 'https://placehold.co/600x600/EEE/111?text=AirPods+Pro+2', rating: 4.8 },
  { id: 'a2', title: 'Galaxy Buds 3 Pro', price: 229.00, category: 'audio', img: 'https://placehold.co/600x600/DDD/111?text=Galaxy+Buds+3', rating: 4.7 },
  { id: 'a3', title: 'Sony WH-1000XM5', price: 349.00, category: 'audio', img: 'https://placehold.co/600x600/333/FFF?text=Sony+XM5', rating: 4.9 },
  { id: 'a4', title: 'Bose QC Ultra', price: 379.00, category: 'audio', img: 'https://placehold.co/600x600/222/FFF?text=Bose+QC+Ultra', rating: 4.6 },
  // Wearables
  { id: 'w1', title: 'Apple Watch Ultra 2', price: 799.00, category: 'wearable', img: 'https://placehold.co/600x600/111/FFF?text=Watch+Ultra+2', rating: 4.9 },
  { id: 'w2', title: 'Galaxy Watch 7', price: 299.00, category: 'wearable', img: 'https://placehold.co/600x600/EEE/111?text=Galaxy+Watch+7', rating: 4.7 },
  { id: 'w3', title: 'Apple Watch Series 10', price: 399.00, category: 'wearable', img: 'https://placehold.co/600x600/DDD/111?text=Watch+Series+10', rating: 4.8 }
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

function renderProducts(filter = 'all') {
  const grid = qs('#product-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const items = PRODUCTS.filter(p => filter === 'all' ? true : p.category === filter);
  items.forEach(p => {
    const card = document.createElement('div'); card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h4>${p.title}</h4>
      <!-- Rating removed -->
      <div class="price">$${p.price.toFixed(2)}</div>
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
        <h2>${p.title}</h2>
        <p class="price">$${p.price.toFixed(2)}</p>
        <!-- Rating Removed -->
        <p class="muted">Category: ${p.category}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, laborum!</p>

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
        <div class="rating">⭐ ${p.rating}</div>
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
