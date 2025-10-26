/* Demo product dataset (Unsplash images). Replace with local images if desired. */
const PRODUCTS = [
  { id: 'p1', title:'Phone Holder Sakti', price:29.90, category:'phone', img:'https://i.pinimg.com/736x/df/1f/bd/df1fbdfdd652e87172fc51c467b2ca5d.jpg', rating:5.0 },
  { id: 'p2', title:'Headsound Headphones', price:129.00, category:'music', img:'https://i.pinimg.com/1200x/fa/07/64/fa076472b1d600d7cf29c2cf61a8acf5.jpg', rating:4.9 },
  { id: 'p3', title:'Sony ALPHA 7 IV', price:199.90, category:'home', img:'https://i.pinimg.com/736x/fb/09/72/fb0972cf103d7fb81c9be254a63db108.jpg', rating:4.4 },
  { id: 'p4', title:'Smart CCTV Cam', price:150.00, category:'home', img:'https://i.pinimg.com/736x/2f/46/2b/2f462b782e8bd4d145d6b441c11f1826.jpg', rating:4.7 },
  { id: 'p5', title:'JBL Boombox 4', price:90.90, category:'music', img:'https://i.pinimg.com/1200x/2d/2e/bf/2d2ebfb23e5145cf76a0590bd0dfd029.jpg', rating:4.2 },
  { id: 'p6', title:'TWS Bujug Earbuds', price:40.90, category:'music', img:'https://i.pinimg.com/736x/05/47/85/054785a61fb85329fe334451de6b23ab.jpg', rating:5.0 },
  { id: 'p7', title:'Portable SSD 1TB', price:120.00, category:'storage', img:'https://i.pinimg.com/1200x/53/35/fd/5335fd0ecccc6636b257200ff6590ec9.jpg', rating:4.8 },
  { id: 'p8', title:'Wireless Charger Pad', price:35.50, category:'phone', img:'https://i.pinimg.com/736x/33/21/a3/3321a3d86dd9eda8ed8d7a9d863298fe.jpg', rating:4.5 },
  { id: 'p9', title:'Bluetooth Speaker X100', price:30.00, category:'music', img:'https://i.pinimg.com/1200x/5c/46/8e/5c468e2cfd4684fd2b6ec75f837799ca.jpg', rating:4.3 },
  { id: 'p10', title:'4K Action Camera', price:180.00, category:'home', img:'https://i.pinimg.com/1200x/f1/23/df/f123df6d7f753072b40cb6f75b35b47d.jpg', rating:4.6 },
  { id: 'p11', title:'USB-C Hub Pro', price:55.00, category:'storage', img:'https://i.pinimg.com/1200x/30/6d/0d/306d0d242efa71240242fa8474183a13.jpg', rating:4.4 },
  { id: 'p12', title:'Noise Cancelling Earbuds', price:75.00, category:'music', img:'https://i.pinimg.com/1200x/32/28/a6/3228a63c26a3992e3e0319ae6a072a21.jpg', rating:4.9 }
];


/* Helper functions */
function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }

/* Menu toggle for mobile */
function initMenuToggle() {
  qsa('#menu-toggle, #menu-toggle-2, #menu-toggle-3').forEach(btn => {
    if(!btn) return;
    const idSuffix = btn.id.split('-').pop(); // "", "2", etc
    const menu = document.getElementById(idSuffix ? `mobile-menu-${idSuffix}` : 'mobile-menu') || document.getElementById('mobile-menu');
    btn.addEventListener('click', ()=> {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if(menu) menu.hidden = open;
    });
  });
}

/* CART (localStorage) */
function getCart(){ return JSON.parse(localStorage.getItem('jg_cart') || '[]') }
function saveCart(cart){ localStorage.setItem('jg_cart', JSON.stringify(cart)); updateCartCount(); }
function addToCart(productId, qty=1){
  const cart = getCart();
  const found = cart.find(i=>i.id===productId);
  if(found) found.qty += qty; else cart.push({id:productId, qty});
  saveCart(cart);
}
function removeFromCart(productId){
  const cart = getCart().filter(i=>i.id!==productId);
  saveCart(cart);
}
function updateCartCount(){
  const count = getCart().reduce((s,i)=>s+i.qty,0);
  qsa('#cart-count, #cart-count-2, #cart-count-3').forEach(n => { if(n) n.textContent = count });
}

/* Render products (shop page) */
function renderProducts(filter='all'){
  const grid = qs('#product-grid');
  if(!grid) return;
  grid.innerHTML = '';
  const items = PRODUCTS.filter(p => filter==='all' ? true : p.category === filter);
  items.forEach(p => {
    const card = document.createElement('div'); card.className='product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h4>${p.title}</h4>
      <div class="rating">⭐ ${p.rating}</div>
      <div class="price">$${p.price.toFixed(2)}</div>
      <div class="card-actions">
        <button class="btn add-cart" data-id="${p.id}">Add to Cart</button>
        <button class="btn btn-primary view" data-id="${p.id}">Buy Now</button>
      </div>
    `;
    grid.appendChild(card);
  });

  qsa('.add-cart').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      addToCart(btn.dataset.id,1);
      alert('Added to cart');
    });
  });
  qsa('.view').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const id = btn.dataset.id;
      window.location.href = `product.html?id=${id}`;
    });
  });
}

/* Product page */
function renderProductPage(){
  const el = qs('#product-page');
  if(!el) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p){ el.innerHTML = '<p>Product not found</p>'; return; }
  el.innerHTML = `
    <div class="product-detail">
      <div><img src="${p.img}" alt="${p.title}"></div>
      <div class="product-meta">
        <h2>${p.title}</h2>
        <p class="price">$${p.price.toFixed(2)}</p>
        <p class="rating">⭐ ${p.rating}</p>
        <p class="muted">Category: ${p.category}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, laborum!</p>

        <div style="display:flex;gap:12px;margin-top:12px">
          <button class="btn" id="add-cart-single">Add to Cart</button>
          <a class="btn btn-primary" id="buy-now-single" href="order.html">Buy Now</a>
        </div>
      </div>
    </div>
  `;

  qs('#add-cart-single').addEventListener('click', ()=> {
    addToCart(p.id,1);
    alert('Added to cart');
  });

  qs('#buy-now-single').addEventListener('click', ()=> {
    addToCart(p.id,1);
    // redirect to order page (cart loaded there)
  });
}

/* Render cart page */
function renderCartPage(){
  const el = qs('#cart-items');
  if(!el) return;
  const cart = getCart();
  if(cart.length===0){ el.innerHTML = '<p>Your cart is empty.</p>'; return; }

  el.innerHTML = '';
  cart.forEach(item => {
    const p = PRODUCTS.find(x=>x.id===item.id);
    const row = document.createElement('div'); row.className='cart-row';
    row.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div style="flex:1">
        <strong>${p.title}</strong>
        <div class="muted">$${p.price.toFixed(2)} x ${item.qty} = <strong>$${(p.price*item.qty).toFixed(2)}</strong></div>
      </div>
      <div>
        <button class="btn remove" data-id="${item.id}">Remove</button>
      </div>
    `;
    el.appendChild(row);
  });

  qsa('.remove').forEach(b=>{
    b.addEventListener('click', ()=> {
      removeFromCart(b.dataset.id);
      renderCartPage();
    });
  });
}

/* Checkout simulated */
function initCheckout(){
  const form = qs('#checkout-form');
  if(!form) return;
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
      items: getCart(),
      total: getCart().reduce((s,it)=> {
        const p = PRODUCTS.find(x=>x.id===it.id); return s + (p.price*it.qty);
      },0)
    };

    // Save order locally
    const orders = JSON.parse(localStorage.getItem('jg_orders') || '[]');
    orders.push(order);
    localStorage.setItem('jg_orders', JSON.stringify(orders));

    // clear cart
    localStorage.removeItem('jg_cart');
    updateCartCount();
    renderCartPage();

    // Show confirmation
    const result = qs('#order-result');
    if(result){
      result.hidden = false;
      result.innerHTML = `<h4>Order Complete</h4>
        <p>Order <strong>${order.id}</strong> placed. Total: $${order.total.toFixed(2)}</p>
        <p>A confirmation email (demo) has been "sent" to <strong>${order.email}</strong>.</p>`;
    }

    // demo: open mailto to simulate email
    const subject = encodeURIComponent(`Order confirmed: ${order.id}`);
    const body = encodeURIComponent(`Thanks ${order.name}!\nYour order (${order.id}) total: $${order.total.toFixed(2)}.\nWe will ship to: ${order.address}\n\n(THIS IS A DEMO)`);
    window.open(`mailto:${order.email}?subject=${subject}&body=${body}`);
  });
}

/* Auth demo (localStorage) */
function initAuth(){
  const signup = qs('#signup-form');
  const login = qs('#login-form');
  const status = qs('#auth-status');
  const logoutBtn = qs('#logout-btn');

  if(signup){
    signup.addEventListener('submit', e=>{
      e.preventDefault();
      const fd = new FormData(signup);
      const user = { name: fd.get('name'), email: fd.get('email'), password: fd.get('password') };
      localStorage.setItem('jg_user_'+user.email, JSON.stringify(user));
      alert('Signed up — demo account saved locally. Now log in.');
      signup.reset();
    });
  }

  if(login){
    login.addEventListener('submit', e=>{
      e.preventDefault();
      const fd = new FormData(login);
      const email = fd.get('email'); const pass = fd.get('password');
      const stored = localStorage.getItem('jg_user_'+email);
      if(!stored){ status.textContent = 'User not found.'; return; }
      const user = JSON.parse(stored);
      if(user.password !== pass){ status.textContent = 'Wrong password.'; return; }
      // set session
      localStorage.setItem('jg_session', JSON.stringify({ email: user.email, name: user.name }));
      status.textContent = `Logged in as ${user.name}.`;
      alert(`Welcome back, ${user.name}!`);
      login.reset();
      if(logoutBtn) logoutBtn.style.display = 'inline-block';
    });
  }

  if(logoutBtn){
    logoutBtn.addEventListener('click', ()=>{
      localStorage.removeItem('jg_session');
      alert('Logged out (demo).');
      logoutBtn.style.display = 'none';
      qs('#auth-status').textContent = '';
    });
  }

  // show logout if session exists
  const session = localStorage.getItem('jg_session');
  if(session && logoutBtn) logoutBtn.style.display = 'inline-block';
}

/* Newsletter demo */
function initNewsletter(){
  const f = qs('#newsletter-form');
  if(!f) return;
  f.addEventListener('submit', e=>{
    e.preventDefault();
    const email = qs('#newsletter-email').value;
    const list = JSON.parse(localStorage.getItem('jg_news') || '[]');
    list.push({email, date:Date.now()});
    localStorage.setItem('jg_news', JSON.stringify(list));
    alert('Thanks — newsletter address saved locally (demo).');
    f.reset();
  });
}

/* Shop search */
function initShopSearch(){
  const f = qs('#shop-search');
  if(!f) return;
  f.addEventListener('submit', e=>{
    e.preventDefault();
    const q = qs('#shop-search-input').value.toLowerCase();
    const results = PRODUCTS.filter(p => p.title.toLowerCase().includes(q));
    const grid = qs('#product-grid');
    if(!grid) return;
    grid.innerHTML = '';
    results.forEach(p => {
      const card = document.createElement('div'); card.className='product-card';
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

    qsa('.add-cart').forEach(btn=> btn.addEventListener('click', ()=>{ addToCart(btn.dataset.id,1); alert('Added to cart'); }));
    qsa('.view').forEach(btn=> btn.addEventListener('click', ()=> window.location.href=`product.html?id=${btn.dataset.id}`));
  });
}

/* Wire header cart buttons to go to order page */
function wireHeaderCartButtons(){
  qsa('#cart-btn,#cart-btn-2,#cart-btn-3').forEach(b=>{
    if(!b) return;
    b.addEventListener('click', ()=> window.location.href='order.html');
  });
}

/* Init on DOM loaded */
document.addEventListener('DOMContentLoaded', ()=>{
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
    r.addEventListener('change', ()=> {
      renderProducts(r.value);
    });
  });
});