'use client';

const SERVICES_LIST = [
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
    <section
      className="
        min-h-screen
        bg-stone-100
        flex items-center justify-center
        p-4 sm:p-6
      "
    >

      <div
        className="
          max-w-5xl
          w-full
          grid grid-cols-1 md:grid-cols-2
          bg-white
          shadow-xl
        "
      >

        {/* ============ LEFT IMAGE ============ */}
        <div className="hidden md:block relative bg-stone-900 overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="Salon"
          />

          <div
            className="
              relative z-10
              p-10 lg:p-16
              h-full
              flex flex-col justify-between
              text-white
            "
          >

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair">
              Start Your Journey
            </h2>

            <p
              className="
                font-lato
                font-light
                text-stone-300
                leading-loose
                text-sm md:text-base
              "
            >
              Exceptional care, timeless style, and a moment of peace in your busy day.
            </p>

          </div>

        </div>

        {/* ============ RIGHT FORM ============ */}
        <div
          className="
            p-6 sm:p-8 md:p-12 lg:p-16
          "
        >

          <h3
            className="
              text-2xl sm:text-3xl
              font-playfair
              text-stone-900
              mb-6 sm:mb-8
            "
          >
            Reservation
          </h3>

          <form className="space-y-5 sm:space-y-6">

            {/* Name */}
            <div className="space-y-1.5">

              <label
                className="
                  text-[9px] sm:text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-stone-900
                  font-bold
                "
              >
                Full Name
              </label>

              <input
                type="text"
                className="
                  w-full
                  border-b border-stone-300
                  py-2.5 sm:py-3
                  focus:outline-none
                  focus:border-stone-900
                  text-stone-900
                  transition-colors
                "
              />

            </div>

            {/* Service */}
            <div className="space-y-1.5">

              <label
                className="
                  text-[9px] sm:text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-stone-900
                  font-bold
                "
              >
                Service
              </label>

              <select
                className="
                  w-full
                  border-b border-stone-300
                  py-2.5 sm:py-3
                  focus:outline-none
                  focus:border-stone-900
                  bg-transparent
                  text-stone-900
                "
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.id}>
                    {s.name} ({s.price})
                  </option>
                ))}
              </select>

            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="space-y-1.5">

                <label
                  className="
                    text-[9px] sm:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-stone-900
                    font-bold
                  "
                >
                  Date
                </label>

                <input
                  type="date"
                  className="
                    w-full
                    border-b border-stone-300
                    py-2.5 sm:py-3
                    focus:outline-none
                    focus:border-stone-900
                    text-stone-900
                    bg-transparent
                  "
                />

              </div>

              <div className="space-y-1.5">

                <label
                  className="
                    text-[9px] sm:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-stone-900
                    font-bold
                  "
                >
                  Time
                </label>

                <input
                  type="time"
                  className="
                    w-full
                    border-b border-stone-300
                    py-2.5 sm:py-3
                    focus:outline-none
                    focus:border-stone-900
                    text-stone-900
                    bg-transparent
                  "
                />

              </div>

            </div>

            {/* Button */}
            <button
              className="
                w-full
                bg-stone-900
                text-white
                py-4 sm:py-5
                mt-2
                uppercase
                tracking-[0.4em]
                text-[9px] sm:text-[10px]
                hover:bg-black
                transition-all
              "
            >
              Request Appointment
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}