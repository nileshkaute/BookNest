// cart.js - Shared cart functionality for all pages

// Initialize cart count on all pages
function initializeCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Add item to cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if item is already in cart
    const existingItem = cart.find(cartItem => cartItem.title === item.title);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title: item.title,
            author: item.author,
            price: item.price,
            img: item.img,
            quantity: 1
        });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    
    return cart;
}

// Call initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCartCount);
