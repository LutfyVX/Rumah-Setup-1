import React from "react";


() => {
  // Mock product data (replace with your actual data)
  const product = {
    id: 1,
    title: "Premium Product",
    price: 1500000,
    description: "This is a fantastic product with high-quality materials and exceptional craftsmanship. Perfect for everyday use with long-lasting durability.",
    category: "Electronics",
    image: "/api/placeholder/400/400",
    rating: { rate: 4.5, count: 120 }
  };

  // Mock related products
  const relatedProducts = [
    {
      id: 2,
      title: "Related Product 1",
      price: 1200000,
      image: "/api/placeholder/400/400"
    },
    {
      id: 3,
      title: "Related Product 2",
      price: 980000,
      image: "/api/placeholder/400/400"
    },
    {
      id: 4,
      title: "Related Product 3",
      price: 1350000,
      image: "/api/placeholder/400/400"
    },
    {
      id: 5,
      title: "Related Product 4",
      price: 760000,
      image: "/api/placeholder/400/400"
    }
  ];

  // Helper functions
  const formatToIDR = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  const getOriginalPrice = (price) => {
    // Mock function to calculate original price (20% higher)
    const originalPrice = price * 1.2;
    return formatToIDR(originalPrice);
  };

  // State management
  const [quantity, setQuantity] = React.useState(1);
  const [selectedImage, setSelectedImage] = React.useState(0);

  // Mock thumbnails
  const thumbnails = [
    product.image,
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400"
  ];

  // Mock cart functions
  const addToCart = () => {
    alert(`Added ${quantity} of ${product.title} to cart!`);
  };

  const buyNow = () => {
    alert(`Proceeding to checkout with ${quantity} of ${product.title}!`);
  };

  const RelatedProductCard = ({ product }) => {
    return (
      <div className="border border-gray-200 rounded-md overflow-hidden">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-48 object-contain p-2" 
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{product.title}</h3>
          <div className="mt-2 flex flex-col">
            <span className="text-gray-400 line-through text-sm">{getOriginalPrice(product.price)}</span>
            <span className="font-bold">{formatToIDR(product.price)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Navbar would go here in a real application */}
      <div className="flex flex-col md:flex-row gap-8 py-8">
        {/* Left side - Images */}
        <div className="md:w-1/2">
          <div className="flex">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4 mr-4">
              {thumbnails.map((thumb, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border w-16 h-16 cursor-pointer ${selectedImage === index ? 'border-black' : 'border-gray-200'}`}
                >
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain p-1" />
                </div>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 border border-gray-200">
              <img src={thumbnails[selectedImage]} alt={product.title} className="w-full h-auto object-contain p-4" />
            </div>
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="mb-4">
            <span className="text-2xl font-bold">{formatToIDR(product.price)} IDR</span>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-700">Stok: 123</p>
          </div>

          {/* Quantity selector */}
          <div className="mb-6">
            <p className="mb-2">Quantity</p>
            <div className="flex items-center">
              <button 
                className="w-8 h-8 border border-gray-300 flex items-center justify-center"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button 
                className="w-8 h-8 border border-gray-300 flex items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button 
              className="w-full py-3 border border-black bg-white text-black font-medium rounded hover:bg-gray-100"
              onClick={buyNow}
            >
              Buy Now
            </button>
            <button 
              className="w-full py-3 bg-black text-white font-medium rounded hover:bg-gray-800"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>

          {/* Share button */}
          <div className="mt-6">
            <button className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-gray-200 pt-8 pb-8">
        <h2 className="text-xl font-semibold mb-4">Deskripsi</h2>
        <p className="text-gray-600">{product.description}</p>
      </div>

      {/* Product specifications */}
      <div className="border-t border-gray-200 pt-8 pb-16">
        <h2 className="text-xl font-semibold mb-4">Spesifikasi Produk</h2>
        <div className="text-gray-600">
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating?.rate} out of 5 ({product.rating?.count} reviews)</p>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-gray-200 pt-8 pb-16">
        <h2 className="text-xl font-semibold my-4">Produk Terkait</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map(product => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}