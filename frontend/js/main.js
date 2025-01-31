const productsContainer = document.getElementById('products');
const cartItemsContainer = document.getElementById('cart-items');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fetch products from the backend
async function fetchProducts() {
    const response = await fetch('http://localhost:5000/api/products');
    const products = await response.json();
    displayProducts(products);
}

// Display products on the homepage
function displayProducts(products) {
    productsContainer.innerHTML = products.map(product => `
        <div class="product">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

// Display cart items
function displayCartItems() {
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
        </div>
    `).join('');
}

// Initialize the page
if (productsContainer) {
    fetchProducts();
} else if (cartItemsContainer) {
    displayCartItems();
}