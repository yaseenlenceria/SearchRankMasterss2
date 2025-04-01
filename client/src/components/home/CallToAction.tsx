import { Link } from "wouter";

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
            <p className="text-lg text-blue-100">
              Get a free website audit and discover how we can help your LA business grow.
            </p>
          </div>
          <div className="lg:w-1/3 text-center lg:text-right">
            <Link 
              href="/best-los-angeles-free-site-audit" 
              className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md shadow-lg transition-all text-lg"
            >
              Free Website Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
