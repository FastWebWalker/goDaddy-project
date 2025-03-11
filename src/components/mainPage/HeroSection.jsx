// Hero Section
export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "url('https://images4.alphacoders.com/114/1144182.jpg')",
      }}>
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest uppercase">
          Women's Nylon Pack
        </h1>
        <p className="text-lg mt-4 max-w-lg mx-auto">
          Experience premium performance and aesthetics.
        </p>
      </div>
    </section>
  );
}
