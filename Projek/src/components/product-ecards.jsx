import { useState, useEffect } from "react";
import LikeButton from "./like";

const ProductList = ({ className }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          className={className}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ product, className }) => {
  const formattedPrice = new Intl.NumberFormat('id-ID').format(product.price * 16652); // Converting USD to IDR (approximate)

  return (
    <div className={`bg-white rounded-lg overflow-hidden transition-shadow duration-300 ${className}`}>
      <a href={`/product/${product.id}`} className="block">
        <div className="relative h-48 w-full">
          <img 
            src={product.image} 
            alt={product.title} 
            className="object-contain p-2 w-full h-full" 
          />
          <div className="absolute top-2 right-2">
            <LikeButton productId={product.id} />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-black font-helvetica-nikka truncate hover:text-clip">
            {product.title}
          </h2>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xl font-bold text-black font-helvetica-nikka">
              {formattedPrice}
            </span>
          </div>
        </div>
        <div className="px-3 pb-3">
          <button className="w-full bg-white outline-[0.6px] hover:bg-black hover:text-white text-black py-2 px-4 rounded font-bold">
            Add
          </button>
        </div>
      </a>
    </div>
  );
};

export default ProductList;