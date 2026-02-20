'use client';

export const SALON_SERVICES = [
  { id: 1, name: 'Hair Artistry', price: '$85' },
  { id: 2, name: 'Spa Rituals', price: '$120' },
  { id: 3, name: 'Skin Therapy', price: '$95' },
  { id: 4, name: 'Bridal Couture', price: '$250' },
  { id: 5, name: 'Scalp Detox', price: '$65' },
  { id: 6, name: 'Gentleman’s Cut', price: '$55' },
  { id: 7, name: 'Nail Boutique', price: '$45' },
  { id: 8, name: 'Brow & Lash', price: '$40' },
  { id: 9, name: 'Keratin Smooth', price: '$200' },
  { id: 10, name: 'Quick Refresh', price: '$45' },
  { id: 11, name: 'Balayage Glow', price: '$180' },
  { id: 12, name: 'Aroma Therapy', price: '$110' },
  { id: 13, name: 'Detox Body Wrap', price: '$140' },
  { id: 14, name: 'Red Carpet Facial', price: '$160' },
  { id: 15, name: 'Beard Grooming', price: '$35' },
  { id: 16, name: 'Silk Hair Spa', price: '$75' }
];

export default function BookNow() {
  return (
    <section className="min-h-screen bg-stone-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white shadow-xl">
        
        {/* Left Side Visual */}
        <div className="hidden md:block relative bg-stone-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="Salon"
          />
          <div className="relative z-10 p-16 h-full flex flex-col justify-between text-white">
            <h2 className="text-5xl font-playfair font-bold">Start Your Journey</h2>
            <p className="font-lato font-light text-stone-300 leading-loose">
              Exceptional care, timeless style, and a moment of peace in your busy day.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="p-10 md:p-16">
          <h3 className="text-3xl font-playfair text-stone-900 mb-8 font-bold">Reservation</h3>
          
          <form className="space-y-6">
            {/* Full Name Input */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold">Full Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 text-stone-900 transition-colors bg-transparent placeholder:text-stone-300" 
              />
            </div>
            
            {/* Service Selection - Now with 16 items */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold">Select Service</label>
              <select className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 bg-transparent text-stone-900 appearance-none cursor-pointer">
                <option value="" disabled selected>Choose a ritual...</option>
                {SALON_SERVICES.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time Inputs for better functionality */}
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold">Date</label>
                <input type="date" className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 text-stone-900 bg-transparent" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold">Time</label>
                <input type="time" className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 text-stone-900 bg-transparent" />
              </div>
            </div>

            <button className="w-full bg-stone-900 text-white py-5 mt-4 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-black transition-all active:scale-[0.98]">
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}