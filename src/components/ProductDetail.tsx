'use client';
import { useCart } from '@/context/CartContext'; // Import the hook

interface ProductDetailProps {
  product: any;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addToCart } = useCart(); // Destructure the function

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product); // This saves the item and opens the CartView automatically
    onClose(); // Closes the detail modal so the cart is visible underneath
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative rounded-sm">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-900 z-50 text-2xl hover:scale-110 transition-transform bg-white/80 rounded-full w-10 h-10 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="md:w-1/2 bg-stone-100 flex items-center justify-center overflow-hidden">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto flex flex-col justify-center bg-white">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold border-b border-stone-200 pb-2">
              {product.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair text-stone-900 font-bold leading-tight">
              {product.name}
            </h2>
            <div className="flex items-center gap-4">
              <p className="text-3xl text-stone-900 font-bold">{product.price}</p>
              <span className="text-green-600 text-sm font-bold uppercase tracking-widest">In Stock</span>
            </div>

            <p className="text-stone-600 font-lato font-light leading-relaxed text-lg pt-4 border-t border-stone-100">
              Professional-grade formula designed by Serenity artisans for luxury home maintenance.
            </p>

            {/* Action Buttons */}
            <div className="pt-10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-stone-900 text-white py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black transition-all"
              >
                Add to cart
              </button>
              <button 
                onClick={onClose}
                className="flex-1 border border-stone-300 text-stone-900 py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-stone-50 transition-all"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}