import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
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
              className="inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Explore Products
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl bg-white shadow p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 bg-blue-100 rounded" />
              <div className="h-20 bg-purple-100 rounded" />
              <div className="h-20 bg-rose-100 rounded" />
              <div className="h-20 bg-emerald-100 rounded" />
              <div className="h-20 bg-amber-100 rounded" />
              <div className="h-20 bg-sky-100 rounded" />
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
