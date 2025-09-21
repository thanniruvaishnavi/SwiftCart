// Simple validation script to check the product gallery functionality
function validateProductGallery() {
    const results = {
        passed: 0,
        failed: 0,
        errors: []
    };

    function test(description, condition) {
        if (condition) {
            results.passed++;
            console.log(`✅ ${description}`);
        } else {
            results.failed++;
            results.errors.push(description);
            console.log(`❌ ${description}`);
        }
    }

    // Test 1: Products data loaded
    test('Products data is loaded', window.products && window.products.length > 0);

    // Test 2: ProductGallery class exists
    test('ProductGallery class is available', typeof window.ProductGallery === 'function');

    // Test 3: Gallery instance created
    test('Gallery instance exists', window.productGallery instanceof window.ProductGallery);

    // Test 4: DOM elements exist
    test('Product grid exists', document.getElementById('productGrid') !== null);
    test('Filter buttons exist', document.querySelectorAll('.filter-btn').length > 0);
    test('Search input exists', document.getElementById('searchInput') !== null);
    test('Modal exists', document.getElementById('productModal') !== null);

    // Test 5: Products rendered
    test('Products are rendered', document.querySelectorAll('.product-card').length > 0);

    // Test 6: Categories available
    const categories = window.productGallery.getCategories();
    test('Categories are available', categories && categories.length > 0);

    // Summary
    console.log('\n📊 Validation Summary:');
    console.log(`✅ Passed: ${results.passed}`);
    console.log(`❌ Failed: ${results.failed}`);
    
    if (results.errors.length > 0) {
        console.log('\n⚠️ Issues found:');
        results.errors.forEach(error => console.log(`- ${error}`));
    } else {
        console.log('\n🎉 All tests passed! Your product gallery is ready to use.');
    }

    return results;
}

// Auto-run validation when page loads (after a small delay)
setTimeout(() => {
    console.log('🔍 Running Product Gallery Validation...\n');
    validateProductGallery();
}, 1000);

// Make validation available globally
window.validateProductGallery = validateProductGallery;