import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center">
      <p className="text-sm font-semibold text-blue-600">404</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
        Page not found
      </h1>
      <p className="mt-3 text-gray-600">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link
          to="/"
          className="px-5 py-3 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Go Home
        </Link>
        <Link
          to="/products"
          className="px-5 py-3 rounded-md border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
        >
          Browse Products
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
