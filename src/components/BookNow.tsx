'use client';

const SERVICES_LIST = [
  { id: 1, name: 'Hair Artistry', price: '$85' },
  { id: 2, name: 'Spa Rituals', price: '$120' },
  { id: 3, name: 'Skin Therapy', price: '$95' },
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
            <h2 className="text-5xl font-playfair">Start Your Journey</h2>
            <p className="font-lato font-light text-stone-300 leading-loose">
              Exceptional care, timeless style, and a moment of peace in your busy day.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="p-10 md:p-16">
          <h3 className="text-3xl font-playfair text-stone-900 mb-8">Reservation</h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold">Full Name</label>
              <input type="text" className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 text-stone-900 transition-colors" />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold">Service</label>
              <select className="w-full border-b border-stone-300 py-3 focus:outline-none focus:border-stone-900 bg-transparent text-stone-900">
                {SERVICES_LIST.map(s => <option key={s.id}>{s.name} ({s.price})</option>)}
              </select>
            </div>

            <button className="w-full bg-stone-900 text-white py-5 mt-4 uppercase tracking-[0.4em] text-[10px] hover:bg-black transition-all">
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}