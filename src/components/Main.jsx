import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Discover quality products at unbeatable prices
          </h1>
          <p className="mt-4 text-gray-600">
            MSc E-commerce website brings you curated items across fashion,
            electronics, jewelry, and more. Fast, simple, and delightful
            shopping.
          </p>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-flex items-center px-5 py-3 rounded-md bg-brand-600 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-600"
            >
              Explore Products
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl bg-white shadow p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 bg-brand-50 border border-brand-300 rounded" />
              <div className="h-20 bg-brand-50 border border-brand-300 rounded" />
              <div className="h-20 bg-brand-50 border border-brand-300 rounded" />
              <div className="h-20 bg-brand-50 border border-brand-300 rounded" />
              <div className="h-20 bg-brand-50 border border-brand-300 rounded" />
              <div className="h-20 bg-brand-50 border border-brand-300 rounded" />
            </div>
            <p className="text-xs text-gray-500 mt-4">
              A preview of categories you’ll love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
