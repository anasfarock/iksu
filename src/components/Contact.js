// src/components/Contact.js
export default function Contact() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 section-title">
          Let's Build Together
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          If you have any upcoming tenders or projects, we'd be happy to explore
          how IKSU can add value and deliver results.
        </p>
        <div className="bg-gray-800 p-8 rounded-lg inline-block shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Contact Kashif Jamal</h3>
          <p className="text-yellow-400 text-xl font-medium">
            <span className="material-icons align-middle mr-2">phone</span>
            0301-0444544
          </p>
          <p className="text-yellow-400 text-xl font-medium mt-2">
            <span className="material-icons align-middle mr-2">phone</span>
            0333-8213196
          </p>
        </div>
      </div>
    </section>
  );
}
