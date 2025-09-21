// Sample product data for demonstration
const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 99.99,
        oldPrice: 129.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop"
        ],
        description: "Premium wireless headphones with noise cancellation and superior sound quality.",
        longDescription: "Experience exceptional audio quality with these premium wireless Bluetooth headphones. Featuring advanced noise cancellation technology, 30-hour battery life, and comfortable over-ear design perfect for extended listening sessions.",
        features: [
            "Active Noise Cancellation",
            "30-hour battery life",
            "Bluetooth 5.0 connectivity",
            "Premium comfort padding",
            "Built-in microphone",
            "Quick charge capability"
        ],
        badge: "sale",
        inStock: true
    },
    {
        id: 2,
        title: "Organic Cotton T-Shirt",
        category: "clothing",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop"
        ],
        description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
        longDescription: "Made from 100% certified organic cotton, this soft and breathable t-shirt is perfect for everyday wear. Available in multiple colors and sizes, it's designed for comfort and sustainability.",
        features: [
            "100% Organic Cotton",
            "Eco-friendly production",
            "Soft and breathable",
            "Available in 8 colors",
            "Machine washable",
            "Ethically sourced"
        ],
        badge: "new",
        inStock: true
    },
    {
        id: 3,
        title: "Smart Home Security Camera",
        category: "electronics",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
        ],
        description: "Advanced security camera with 4K recording and smart motion detection.",
        longDescription: "Keep your home secure with this advanced 4K security camera featuring smart motion detection, night vision, and mobile app integration for remote monitoring.",
        features: [
            "4K Ultra HD recording",
            "Smart motion detection",
            "Night vision capability",
            "Mobile app integration",
            "Cloud storage option",
            "Weather resistant"
        ],
        badge: "",
        inStock: true
    },
    {
        id: 4,
        title: "Ceramic Plant Pot Set",
        category: "home",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=300&fit=crop"
        ],
        description: "Beautiful handcrafted ceramic pots perfect for indoor plants.",
        longDescription: "Transform your living space with these elegant handcrafted ceramic plant pots. Each pot features drainage holes and a matching saucer, perfect for various indoor plants.",
        features: [
            "Handcrafted ceramic",
            "Set of 3 different sizes",
            "Drainage holes included",
            "Matching saucers",
            "Modern minimalist design",
            "Easy to clean"
        ],
        badge: "",
        inStock: true
    },
    {
        id: 5,
        title: "Professional Yoga Mat",
        category: "sports",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506629905607-0e973cc2c464?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
        ],
        description: "Premium non-slip yoga mat with excellent grip and cushioning.",
        longDescription: "Elevate your yoga practice with this professional-grade mat featuring superior grip, cushioning, and durability. Made from eco-friendly materials for conscious practitioners.",
        features: [
            "Non-slip surface",
            "6mm thick cushioning",
            "Eco-friendly materials",
            "Lightweight and portable",
            "Easy to clean",
            "Includes carrying strap"
        ],
        badge: "",
        inStock: true
    },
    {
        id: 6,
        title: "Vintage Denim Jacket",
        category: "clothing",
        price: 79.99,
        oldPrice: 99.99,
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506629905607-0e973cc2c464?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop"
        ],
        description: "Classic vintage-style denim jacket with authentic wash and fit.",
        longDescription: "Channel timeless style with this classic denim jacket featuring authentic vintage wash, comfortable fit, and durable construction that improves with age.",
        features: [
            "100% Cotton denim",
            "Vintage wash treatment",
            "Classic button closure",
            "Chest and side pockets",
            "Comfortable regular fit",
            "Timeless design"
        ],
        badge: "sale",
        inStock: true
    },
    {
        id: 7,
        title: "Smart LED Desk Lamp",
        category: "electronics",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop"
        ],
        description: "Adjustable LED desk lamp with multiple brightness levels and USB charging.",
        longDescription: "Illuminate your workspace with this modern LED desk lamp featuring adjustable brightness, color temperature control, and built-in USB charging port for your devices.",
        features: [
            "LED energy efficient",
            "Adjustable brightness",
            "Color temperature control",
            "USB charging port",
            "Flexible arm design",
            "Touch controls"
        ],
        badge: "",
        inStock: true
    },
    {
        id: 8,
        title: "Indoor Herb Garden Kit",
        category: "home",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop"
        ],
        description: "Complete kit to grow fresh herbs indoors year-round.",
        longDescription: "Start your own indoor herb garden with this complete kit including seeds, pots, soil, and growing guide. Perfect for fresh herbs in your kitchen all year long.",
        features: [
            "6 herb seed varieties",
            "Biodegradable pots",
            "Organic potting mix",
            "Detailed growing guide",
            "Plant markers included",
            "Perfect for beginners"
        ],
        badge: "new",
        inStock: true
    },
    {
        id: 9,
        title: "Python Programming Guide",
        category: "books",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        ],
        description: "Comprehensive guide to Python programming for beginners and professionals.",
        longDescription: "Master Python programming with this comprehensive guide covering fundamentals to advanced topics. Perfect for beginners and experienced developers looking to enhance their skills.",
        features: [
            "400+ pages of content",
            "Beginner to advanced topics",
            "Practical examples",
            "Exercise solutions",
            "Online resources",
            "Updated for Python 3.9+"
        ],
        badge: "",
        inStock: true
    },
    {
        id: 10,
        title: "Running Shoes",
        category: "sports",
        price: 119.99,
        oldPrice: 149.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
        ],
        description: "High-performance running shoes with superior comfort and support.",
        longDescription: "Experience the perfect balance of comfort and performance with these premium running shoes. Featuring advanced cushioning technology and breathable materials for all-day comfort.",
        features: [
            "Advanced cushioning",
            "Breathable mesh upper",
            "Lightweight design",
            "Superior grip outsole",
            "Available in multiple colors",
            "Shock absorption technology"
        ],
        badge: "sale",
        inStock: true
    },
    {
        id: 11,
        title: "Minimalist Wall Clock",
        category: "home",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1495171009518-1f07ca43b7e7?w=400&h=300&fit=crop"
        ],
        description: "Sleek minimalist wall clock perfect for modern home decor.",
        longDescription: "Add a touch of modern elegance to your space with this minimalist wall clock. Features silent movement and clean design that complements any interior style.",
        features: [
            "Silent quartz movement",
            "Minimalist design",
            "12-inch diameter",
            "Easy to read numbers",
            "Battery operated",
            "Modern aesthetic"
        ],
        badge: "",
        inStock: true
    },
    {
        id: 12,
        title: "JavaScript Masterclass Book",
        category: "books",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop"
        ],
        description: "Advanced JavaScript techniques and modern development practices.",
        longDescription: "Take your JavaScript skills to the next level with this advanced guide covering modern ES6+ features, async programming, and professional development practices.",
        features: [
            "500+ pages of content",
            "ES6+ features covered",
            "Async programming",
            "Real-world projects",
            "Code examples included",
            "Industry best practices"
        ],
        badge: "new",
        inStock: true
    }
];

// Export for use in other files
window.products = products;