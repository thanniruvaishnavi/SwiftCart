// Product Gallery Application
class ProductGallery {
    constructor() {
        this.products = window.products || [];
        this.filteredProducts = this.products;
        this.currentFilter = 'all';
        this.currentSearch = '';
        this.currentModalProduct = null;
        this.currentImageIndex = 0;
        
        this.init();
    }

    init() {
        this.showLoading();
        this.bindEvents();
        this.renderProducts();
        this.hideLoading();
    }

    bindEvents() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleFilterClick(e.target);
            });
        });

        // Search input
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Modal events
        const modal = document.getElementById('productModal');
        const closeBtn = document.getElementById('closeModal');
        const prevBtn = document.getElementById('prevImage');
        const nextBtn = document.getElementById('nextImage');
        const contactBtn = document.getElementById('contactBtn');
        const shareBtn = document.getElementById('shareBtn');

        closeBtn.addEventListener('click', () => this.closeModal());
        prevBtn.addEventListener('click', () => this.previousImage());
        nextBtn.addEventListener('click', () => this.nextImage());
        contactBtn.addEventListener('click', () => this.contactBusiness());
        shareBtn.addEventListener('click', () => this.shareProduct());

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                switch(e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        this.previousImage();
                        break;
                    case 'ArrowRight':
                        this.nextImage();
                        break;
                }
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    showLoading() {
        document.getElementById('loading').style.display = 'flex';
    }

    hideLoading() {
        document.getElementById('loading').style.display = 'none';
    }

    handleFilterClick(button) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Apply filter
        const filter = button.getAttribute('data-filter');
        this.currentFilter = filter;
        this.applyFilters();
    }

    handleSearch(searchTerm) {
        this.currentSearch = searchTerm.toLowerCase();
        this.applyFilters();
    }

    applyFilters() {
        this.filteredProducts = this.products.filter(product => {
            const matchesFilter = this.currentFilter === 'all' || product.category === this.currentFilter;
            const matchesSearch = this.currentSearch === '' || 
                product.title.toLowerCase().includes(this.currentSearch) ||
                product.description.toLowerCase().includes(this.currentSearch) ||
                product.category.toLowerCase().includes(this.currentSearch);
            
            return matchesFilter && matchesSearch;
        });

        this.renderProducts();
    }

    renderProducts() {
        const productGrid = document.getElementById('productGrid');
        const noResults = document.getElementById('noResults');

        if (this.filteredProducts.length === 0) {
            productGrid.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';
        
        productGrid.innerHTML = this.filteredProducts.map(product => {
            return this.createProductCard(product);
        }).join('');

        // Add click events to product cards
        this.bindProductCardEvents();
    }

    createProductCard(product) {
        const badge = product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : '';
        const oldPrice = product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : '';
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    ${badge}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        $${product.price}
                        ${oldPrice}
                    </div>
                </div>
            </div>
        `;
    }

    bindProductCardEvents() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const productId = parseInt(card.getAttribute('data-product-id'));
                this.openModal(productId);
            });
        });
    }

    openModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        this.currentModalProduct = product;
        this.currentImageIndex = 0;

        // Populate modal content
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalCategory').textContent = product.category;
        document.getElementById('modalPrice').textContent = `$${product.price}`;
        document.getElementById('modalDescription').textContent = product.longDescription || product.description;

        // Set main image
        this.updateModalImage();

        // Features
        const featuresContainer = document.getElementById('modalFeatures');
        if (product.features && product.features.length > 0) {
            featuresContainer.innerHTML = `
                <h4>Features:</h4>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
        } else {
            featuresContainer.innerHTML = '';
        }

        // Show/hide navigation buttons
        const prevBtn = document.getElementById('prevImage');
        const nextBtn = document.getElementById('nextImage');
        const hasMultipleImages = product.images && product.images.length > 1;
        
        prevBtn.style.display = hasMultipleImages ? 'flex' : 'none';
        nextBtn.style.display = hasMultipleImages ? 'flex' : 'none';

        // Show modal
        const modal = document.getElementById('productModal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Add animation class
        setTimeout(() => {
            modal.querySelector('.modal-content').classList.add('slide-in');
        }, 10);
    }

    updateModalImage() {
        const product = this.currentModalProduct;
        if (!product) return;

        const images = product.images || [product.image];
        const modalImage = document.getElementById('modalImage');
        
        modalImage.src = images[this.currentImageIndex];
        modalImage.alt = product.title;
    }

    previousImage() {
        if (!this.currentModalProduct) return;
        
        const images = this.currentModalProduct.images || [this.currentModalProduct.image];
        this.currentImageIndex = (this.currentImageIndex - 1 + images.length) % images.length;
        this.updateModalImage();
    }

    nextImage() {
        if (!this.currentModalProduct) return;
        
        const images = this.currentModalProduct.images || [this.currentModalProduct.image];
        this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
        this.updateModalImage();
    }

    closeModal() {
        const modal = document.getElementById('productModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.currentModalProduct = null;
        this.currentImageIndex = 0;
    }

    contactBusiness() {
        const product = this.currentModalProduct;
        if (!product) return;

        const subject = encodeURIComponent(`Inquiry about ${product.title}`);
        const body = encodeURIComponent(`Hi, I'm interested in learning more about the ${product.title}. Could you please provide more information?\n\nThank you!`);
        
        window.location.href = `mailto:info@yourbusiness.com?subject=${subject}&body=${body}`;
    }

    shareProduct() {
        const product = this.currentModalProduct;
        if (!product) return;

        if (navigator.share) {
            navigator.share({
                title: product.title,
                text: product.description,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback: copy to clipboard
            const shareText = `Check out this product: ${product.title} - ${product.description}`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('Product link copied to clipboard!');
            }).catch(() => {
                // Fallback for clipboard
                this.showNotification('Sharing not supported on this device');
            });
        }
    }

    showNotification(message) {
        // Create and show a simple notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #667eea;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 1002;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Utility method to add more products dynamically
    addProduct(product) {
        this.products.push(product);
        this.applyFilters();
    }

    // Method to update a product
    updateProduct(productId, updates) {
        const productIndex = this.products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...updates };
            this.applyFilters();
        }
    }

    // Method to remove a product
    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
        this.applyFilters();
    }

    // Method to get filtered products (useful for external integration)
    getFilteredProducts() {
        return this.filteredProducts;
    }

    // Method to get all categories
    getCategories() {
        const categories = [...new Set(this.products.map(p => p.category))];
        return categories.sort();
    }

    // Method to initialize with custom products
    setProducts(products) {
        this.products = products;
        this.applyFilters();
    }
}

// Performance optimization: Lazy loading for images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the product gallery
    window.productGallery = new ProductGallery();
    
    // Setup lazy loading
    setupLazyLoading();
    
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading states for better perceived performance
    window.addEventListener('beforeunload', () => {
        document.getElementById('loading').style.display = 'flex';
    });
});

// Export for external use
window.ProductGallery = ProductGallery;