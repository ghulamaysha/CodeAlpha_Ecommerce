const API = 'http://localhost:5000/api';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Page load hone par products load karo
document.addEventListener('DOMContentLoaded', loadProducts);

// Products load karo backend se
async function loadProducts() {
    try {
        const response = await fetch(`${API}/products`);
        const products = await response.json();

        const grid = document.getElementById('products-grid');

        if (products.length === 0) {
            grid.innerHTML = '<p style="text-align:center; color:#666;">No product found!</p>';
            return;
        }

        grid.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">$${product.price}</div>
                    <button class="btn" onclick="addToCart('${product._id}', '${product.name}', ${product.price})">
                        Add to Cart 🛒
                    </button>
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.log('Products are not loaded:', err);
        document.getElementById('products-grid').innerHTML = 
            '<p style="text-align:center; color:#666;">Products are loaded...</p>';
    }
}

// Cart mein add karo
function addToCart(id, name, price) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, name, price, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} Added to cart! 🛒`);
}

// Cart count update karo
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.qty, 0);
    document.getElementById('cart-count').textContent = count;
}

// Cart dikhao
function showCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Cart is empty! 🛒</p>';
        cartTotal.textContent = '0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>x${item.qty}</span>
                <span>$${item.price * item.qty}</span>
                <button onclick="removeFromCart('${item.id}')" 
                style="background:#e74c3c; color:white; border:none; padding:5px 10px; border-radius:10px; cursor:pointer;">
                Remove</button>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        cartTotal.textContent = total.toFixed(2);
    }

    modal.classList.add('active');
    updateCartCount();
}

// Cart chupaao
function hideCart() {
    document.getElementById('cart-modal').classList.remove('active');
}

// Cart se remove karo
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
    updateCartCount();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    alert('Order placed! 🎉');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    hideCart();
}