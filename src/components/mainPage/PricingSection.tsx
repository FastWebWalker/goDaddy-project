// Pricing Section
export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center">Our Digital Products</h2>
      <div className="flex justify-center gap-8 mt-8">
        <div className="bg-blue-700 p-6 rounded-xl text-center w-80">
          <h3 className="text-2xl font-bold">Product 1</h3>
          <p className="mt-2">Description of the product.</p>
          <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
        <div className="bg-blue-700 p-6 rounded-xl text-center w-80">
          <h3 className="text-2xl font-bold">Product 2</h3>
          <p className="mt-2">Description of the product.</p>
          <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
