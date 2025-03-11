// FAQ Section
export default function FAQSection() {
  return (
    <section className="py-16 bg-black text-white">
      <h2 className="text-4xl font-bold text-center">Questions & Answers</h2>
      <div className="max-w-3xl mx-auto mt-8">
        <details className="mb-4 bg-gray-800 p-4 rounded">
          <summary className="cursor-pointer text-lg font-semibold">
            How do I get access to purchased products?
          </summary>
          <p className="mt-2">
            After purchase, you will receive an email with access details.
          </p>
        </details>
        <details className="mb-4 bg-gray-800 p-4 rounded">
          <summary className="cursor-pointer text-lg font-semibold">
            Can I share the purchased products with others?
          </summary>
          <p className="mt-2">No, sharing purchased products is not allowed.</p>
        </details>
        <details className="mb-4 bg-gray-800 p-4 rounded">
          <summary className="cursor-pointer text-lg font-semibold">
            Is it possible to get a refund?
          </summary>
          <p className="mt-2">
            Refunds are only possible under certain conditions.
          </p>
        </details>
      </div>
    </section>
  );
}
