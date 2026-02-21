'use client';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartView() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-stone-100 overflow-y-auto animate-in slide-in-from-right duration-500 font-sans">
      {/* Navigation for Cart */}
      <nav className="bg-white p-6 flex justify-between items-center border-b border-stone-200 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <ShoppingCart size={20} className="text-stone-900" />
          <div className="text-2xl font-playfair font-bold text-stone-900 tracking-tight font-bold">YOUR CART</div>
        </div>
        <button 
          onClick={() => setIsCartOpen(false)}
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 hover:text-stone-900 transition-colors"
        >
          Close & Continue Shopping
        </button>
      </nav>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left: Item List (Flipkart Style) */}
          <div className="flex-grow space-y-4">
            {cart.length === 0 ? (
              <div className="bg-white p-20 text-center border border-stone-200 flex flex-col items-center justify-center">
                <p className="text-stone-400 font-playfair text-2xl italic mb-8">Your cart is currently empty.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="bg-stone-900 text-white px-10 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-black transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item: any) => (
                <div key={item.id} className="bg-white p-6 flex gap-8 border border-stone-200 shadow-sm transition-all hover:shadow-md relative">
                  
                  {/* Top-Right Remove Symbol */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 text-stone-400 hover:text-red-700 transition-colors p-2"
                  >
                    <X size={18} />
                  </button>

                  <img src={item.img} className="w-28 h-36 object-cover bg-stone-50 shadow-inner" alt={item.name} />
                  
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start pr-10">
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-stone-900">{item.name}</h3>
                        <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-1 font-bold">{item.category}</p>
                      </div>
                      <p className="text-stone-900 font-bold text-xl">{item.price}</p>
                    </div>

                    <div className="flex items-center mt-6">
                      {/* Quantity Selector - Increment/Decrement */}
                      <div className="flex items-center border border-stone-300 rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-4 py-2 hover:bg-stone-50 text-stone-900 transition-colors border-r border-stone-300 font-bold"
                        >
                          −
                        </button>
                        <span className="px-6 py-2 text-stone-900 font-bold text-sm min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-4 py-2 hover:bg-stone-50 text-stone-900 transition-colors border-l border-stone-300 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right: Price Summary (Flipkart Sidebar Style) */}
          <div className="lg:w-[400px] shrink-0">
            <div className="bg-white p-8 border border-stone-200 sticky top-28 shadow-sm">
              <h2 className="text-xs uppercase tracking-[0.2em] text-stone-400 font-bold border-b border-stone-100 pb-4 mb-6">Price Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-stone-600">
                  <span>Price ({cart.length} items)</span>
                  <span className="font-bold text-stone-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Delivery Ritual</span>
                  <span className="text-green-600 font-bold uppercase text-[10px]">Complimentary</span>
                </div>
                
                <div className="pt-6 border-t border-stone-100 mt-6 flex justify-between items-baseline">
                  <span className="text-stone-900 font-bold text-xl font-playfair">Total Amount</span>
                  <span className="text-2xl font-bold text-stone-900 font-playfair">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-stone-900 text-white py-5 mt-10 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-black transition-all shadow-lg active:scale-95">
                Proceed to Checkout
              </button>
              
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-4 border border-stone-200 text-stone-900 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-stone-50 transition-all"
              >
                Keep Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}