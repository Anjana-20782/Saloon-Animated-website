import ScrollScene from "@/components/ScrollScene";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-2xl font-playfair font-bold">SERENITY</div>
        <button className="text-sm uppercase tracking-widest hover:underline">Book Now</button>
      </nav>
      <ScrollScene />
    </main>
  );
}
