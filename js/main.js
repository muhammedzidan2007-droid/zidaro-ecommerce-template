// ============================================
// GLOBAL PRODUCT DATA
// ============================================
const allProducts = [
    {
        id: 1,
        name: "Nike Air Max 2026",
        category: "Running",
        price: 149,
        oldPrice: 199,
        emoji: "👟",
        color: "bg-orange-100",
        badge: "New",
        rating: 4.8,
        description: "Experience maximum comfort with the latest Air Max technology. Breathable mesh upper with responsive cushioning.",
        sizes: [7, 8, 9, 10, 11, 12],
        inStock: true
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        category: "Running",
        price: 180,
        oldPrice: 220,
        emoji: "🏃",
        color: "bg-blue-100",
        badge: "Best Seller",
        rating: 4.9,
        description: "Energy-returning cushioning meets premium comfort. The Ultraboost delivers an unmatched running experience.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        inStock: true
    },
    {
        id: 3,
        name: "Classic Leather Oxford",
        category: "Formal",
        price: 129,
        oldPrice: 169,
        emoji: "👞",
        color: "bg-amber-100",
        badge: null,
        rating: 4.7,
        description: "Handcrafted genuine leather oxford shoes. Perfect for business meetings and formal occasions.",
        sizes: [7, 8, 9, 10, 11],
        inStock: true
    },
    {
        id: 4,
        name: "Puma Casual Sport",
        category: "Casual",
        price: 89,
        oldPrice: 119,
        emoji: "👟",
        color: "bg-green-100",
        badge: "Sale",
        rating: 4.5,
        description: "Versatile casual sneakers that go with everything. Lightweight design for all-day comfort.",
        sizes: [6, 7, 8, 9, 10, 11],
        inStock: true
    },
    {
        id: 5,
        name: "Jordan 1 Retro High",
        category: "Luxury",
        price: 299,
        oldPrice: 350,
        emoji: "🏀",
        color: "bg-red-100",
        badge: "Limited",
        rating: 5.0,
        description: "Iconic silhouette with premium materials. A must-have for collectors and sneaker enthusiasts.",
        sizes: [7, 8, 9, 10],
        inStock: true
    },
    {
        id: 6,
        name: "Reebok Classic",
        category: "Casual",
        price: 79,
        oldPrice: 99,
        emoji: "👟",
        color: "bg-gray-100",
        badge: null,
        rating: 4.3,
        description: "Timeless design meets modern comfort. The Classic never goes out of style.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        inStock: true
    },
    {
        id: 7,
        name: "Premium Formal Derby",
        category: "Formal",
        price: 159,
        oldPrice: 199,
        emoji: "👞",
        color: "bg-stone-100",
        badge: "Premium",
        rating: 4.8,
        description: "Elegant derby shoes crafted from the finest Italian leather. Sophistication in every step.",
        sizes: [7, 8, 9, 10, 11, 12],
        inStock: true
    },
    {
        id: 8,
        name: "Nike React Infinity",
        category: "Running",
        price: 159,
        oldPrice: 190,
        emoji: "🏃",
        color: "bg-cyan-100",
        badge: "New",
        rating: 4.7,
        description: "Designed to reduce injury and keep you running. Responsive foam cushioning with stability support.",
        sizes: [6, 7, 8, 9, 10, 11],
        inStock: true
    },
    {
        id: 9,
        name: "Vans Old Skool",
        category: "Casual",
        price: 69,
        oldPrice: 85,
        emoji: "🛹",
        color: "bg-indigo-100",
        badge: null,
        rating: 4.6,
        description: "The classic side-stripe skate shoe. Durable canvas and suede upper with signature waffle sole.",
        sizes: [5, 6, 7, 8, 9, 10, 11, 12],
        inStock: true
    },
    {
        id: 10,
        name: "Balenciaga Speed",
        category: "Luxury",
        price: 899,
        oldPrice: 1100,
        emoji: "✨",
        color: "bg-purple-100",
        badge: "VIP",
        rating: 4.9,
        description: "Revolutionary sock-style design with memory sole technology. The future of luxury footwear.",
        sizes: [7, 8, 9, 10, 11],
        inStock: false
    },
    {
        id: 11,
        name: "Adidas Stan Smith",
        category: "Casual",
        price: 99,
        oldPrice: 120,
        emoji: "🎾",
        color: "bg-emerald-100",
        badge: "Classic",
        rating: 4.6,
        description: "The iconic tennis shoe that started it all. Clean, minimalist design with perforated 3-Stripes.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        inStock: true
    },
    {
        id: 12,
        name: "Nike Pegasus Turbo",
        category: "Running",
        price: 149,
        oldPrice: 180,
        emoji: "🏃",
        color: "bg-rose-100",
        badge: null,
        rating: 4.7,
        description: "Lightweight and responsive for your daily runs. ZoomX foam delivers incredible energy return.",
        sizes: [6, 7, 8, 9, 10, 11, 12],
        inStock: true
    }
];

// ============================================
// CART & WISHLIST STATE
// ============================================
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('zidaro_cart')) || [];
} catch (e) {
    cart = [];
    localStorage.removeItem('zidaro_cart');
}

let wishlist = [];
try {
    wishlist = JSON.parse(localStorage.getItem('zidaro_wishlist')) || [];
} catch (e) {
    wishlist = [];
    localStorage.removeItem('zidaro_wishlist');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function saveCart() {
    localStorage.setItem('zidaro_cart', JSON.stringify(cart));
}

function saveWishlist() {
    localStorage.setItem('zidaro_wishlist', JSON.stringify(wishlist));
}

function showToast(message, icon = 'ph-check-circle') {
    const toast = document.getElementById('toast');
    const toastIcon = document.getElementById('toast-icon');
    const toastMessage = document.getElementById('toast-message');
    if (!toast) return;
    toastIcon.className = `ph ${icon} text-accent text-xl`;
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-24', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 3000);
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    badge.textContent = totalItems;
    if (totalItems > 0) badge.classList.remove('hidden');
    else badge.classList.add('hidden');
}

function addToCart(productId, quantity = 1, size = null) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity: quantity, size: size });
    }
    saveCart();
    updateCartBadge();
    showToast(`${product.name} added to cart!`, 'ph-check-circle');
}

function removeFromCart(productId, size = null) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCartBadge();
    showToast('Item removed from cart', 'ph-trash');
}

function updateCartQuantity(productId, delta, size = null) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId, size);
        return;
    }
    saveCart();
    updateCartBadge();
}

function toggleWishlist(productId) {
    const index = wishlist.findIndex(id => id === productId);
    if (index === -1) {
        wishlist.push(productId);
        saveWishlist();
        showToast('Added to wishlist!', 'ph-heart');
    } else {
        wishlist.splice(index, 1);
        saveWishlist();
        showToast('Removed from wishlist', 'ph-heart-break');
    }
    updateWishlistIcons();
}

function isInWishlist(productId) {
    return wishlist.includes(productId);
}

function updateWishlistIcons() {
    document.querySelectorAll('[data-wishlist]').forEach(btn => {
        const productId = parseInt(btn.dataset.wishlist);
        const icon = btn.querySelector('i');
        if (!icon) return;
        if (isInWishlist(productId)) {
            icon.className = 'ph-fill ph-heart text-accent text-xl';
        } else {
            icon.className = 'ph ph-heart text-xl';
        }
    });
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
}

function getCartItemCount() {
    return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        menu.classList.toggle('hidden');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = menu.classList.contains('hidden') ? 'ph ph-list text-2xl' : 'ph ph-x text-2xl';
        }
    });

    // إقفال القائمة لما نضغط برّاها
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.add('hidden');
            const icon = btn.querySelector('i');
            if (icon) icon.className = 'ph ph-list text-2xl';
        }
    });
}

// ============================================
// SCROLL ANIMATION OBSERVER
// ============================================
let scrollObserver = null;

function initScrollAnimations() {
    // إذا كان في observer قديم، نوقفه
    if (scrollObserver) {
        scrollObserver.disconnect();
    }

    const options = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.05
    };

    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.reveal').forEach(el => {
        scrollObserver.observe(el);
    });
}

// دالة لإعادة تهيئة الـ Observer بعد إضافة عناصر ديناميكية
function refreshScrollAnimations() {
    if (!scrollObserver) return;
    // نلغي مراقبة القديم ونضيف الجديد
    document.querySelectorAll('.reveal:not(.active)').forEach(el => {
        scrollObserver.observe(el);
    });
}

// ============================================
// PRODUCT CARD GENERATOR (Shared)
// ============================================
function createProductCard(product, showActions = true) {
    const discount = product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;
    const inWishlist = isInWishlist(product.id);
    return `
        <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1">
            <div class="relative ${product.color} p-6 flex items-center justify-center aspect-square">
                ${product.badge ? `<span class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">${product.badge}</span>` : ''}
                <a href="product.html?id=${product.id}">
                    <div class="text-7xl group-hover:scale-110 transition-transform duration-300">${product.emoji}</div>
                </a>
                ${discount > 0 ? `<span class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">-${discount}%</span>` : ''}
                ${!product.inStock ? `<span class="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-lg">Out of Stock</span>` : ''}
                ${showActions && product.inStock ? `
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button onclick="addToCart(${product.id})" class="bg-accent hover:bg-accent-light text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg" title="Add to Cart">
                        <i class="ph ph-shopping-cart text-xl"></i>
                    </button>
                    <button onclick="toggleWishlist(${product.id})" data-wishlist="${product.id}" class="bg-white hover:bg-gray-100 text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg" title="Toggle Wishlist">
                        <i class="${inWishlist ? 'ph-fill ph-heart text-accent' : 'ph ph-heart'} text-xl"></i>
                    </button>
                    <a href="product.html?id=${product.id}" class="bg-white hover:bg-gray-100 text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg" title="View Details">
                        <i class="ph ph-eye text-xl"></i>
                    </a>
                </div>
                ` : ''}
            </div>
            <div class="p-5">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">${product.category}</span>
                    <div class="flex items-center gap-1 text-sm">
                        <i class="ph-fill ph-star text-yellow-400"></i>
                        <span class="text-gray-600 font-medium">${product.rating}</span>
                    </div>
                </div>
                <a href="product.html?id=${product.id}">
                    <h3 class="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">${product.name}</h3>
                </a>
                <div class="flex items-center gap-2">
                    <span class="text-xl font-bold text-accent">$${product.price}</span>
                    ${product.oldPrice ? `<span class="text-sm text-gray-400 line-through">$${product.oldPrice}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// ACTIVE NAV LINK (highlights current page in navbar)
// ============================================
function initActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.remove('text-gray-300');
            link.classList.add('text-white', 'font-semibold');
            const line = link.querySelector('span');
            if (line) {
                line.classList.remove('w-0');
                line.classList.add('w-full');
            }
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    initMobileMenu();
    initScrollAnimations();
    updateWishlistIcons();
    initActiveNavLink();
});