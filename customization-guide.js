// Example: How to customize products for your business
// Copy this template and modify js/products.js

const customProducts = [
    {
        id: 1,
        title: "Your First Product",
        category: "electronics", // Available: electronics, clothing, home, sports, books
        price: 49.99,
        oldPrice: 59.99, // Optional: show sale price
        image: "images/your-product.jpg", // Path to your image
        images: [ // Optional: multiple images for gallery
            "images/your-product-1.jpg",
            "images/your-product-2.jpg",
            "images/your-product-3.jpg"
        ],
        description: "Short, catchy description for the product card",
        longDescription: "Detailed description that appears in the modal popup. This can be longer and more detailed, explaining all the benefits and features of your product.",
        features: [ // Optional: bullet points in modal
            "Key feature 1",
            "Key feature 2", 
            "Key feature 3",
            "Another great benefit",
            "Why customers love this"
        ],
        badge: "new", // Optional: "new", "sale", or leave empty ""
        inStock: true
    },
    // Add more products following the same structure...
];

// Step-by-step customization guide:

/*
1. REPLACE PRODUCT DATA:
   - Copy the structure above
   - Replace with your actual products
   - Update images paths to your actual images

2. UPDATE CATEGORIES:
   - Use existing categories or create new ones
   - If adding new categories, update filter buttons in index.html

3. ADD YOUR IMAGES:
   - Place product images in the 'images' folder
   - Use good quality images (minimum 400x300px)
   - Optimize images for web (use TinyPNG or similar)

4. CUSTOMIZE BUSINESS INFO:
   - Update header logo/business name in index.html
   - Change contact email in js/app.js (contactBusiness method)
   - Update footer information in index.html

5. BRAND COLORS:
   - Edit css/styles.css
   - Look for gradient colors and change to your brand colors
   - Update accent colors throughout

6. TESTING:
   - Open index.html in browser
   - Test filtering and search
   - Test modal functionality
   - Check responsive design on mobile

Example of minimal product for quick start:
*/

const quickStartProduct = {
    id: 1,
    title: "My Awesome Product",
    category: "electronics",
    price: 99.99,
    image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Your+Product",
    description: "Amazing product that your customers will love!",
    longDescription: "This is the detailed description that appears when customers click to learn more about your product.",
    badge: "new",
    inStock: true
};

/*
TIPS FOR SUCCESS:

📸 Images:
- Use consistent image sizes and quality
- Consider using free stock photos from Unsplash initially
- Add your logo watermark for branding

🎨 Design:
- Keep product titles concise (under 50 characters)
- Write compelling descriptions that highlight benefits
- Use consistent pricing format

📱 Mobile:
- Test on actual mobile devices
- Ensure touch targets are large enough
- Check text readability

🚀 Performance:
- Optimize images (aim for under 200KB each)
- Test loading speed
- Consider using a CDN for images

💼 Business Integration:
- Update contact information everywhere
- Add your social media links
- Consider adding Google Analytics

🔍 SEO:
- Add meaningful alt text to images
- Use descriptive product titles
- Add meta descriptions to index.html
*/