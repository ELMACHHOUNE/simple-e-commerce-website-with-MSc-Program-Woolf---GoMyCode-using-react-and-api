import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products/");
        setProducts(data);
        setStatus("ok");
      } catch {
        setStatus("error");
      }
    };
    fetchProducts();
  }, []);

  if (status === "loading") {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 animate-pulse space-y-4"
            >
              <div className="w-full aspect-square bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
              <div className="flex justify-between items-center">
                <div className="h-5 bg-gray-200 rounded w-16" />
                <div className="h-9 bg-gray-200 rounded w-24" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-red-50 text-red-700 border border-red-200 p-4 rounded">
          Failed to load products. Please try again later.
        </div>
      </section>
    );
  }

  const toTitle = (s) =>
    (s || "")
      .split(/[\s-]+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const visibleProducts = activeCategory
    ? products.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      )
    : products;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">
          {activeCategory
            ? `Category: ${toTitle(activeCategory)}`
            : "All Products"}
        </h1>
        {activeCategory && (
          <Link
            to="/products"
            className="text-sm text-blue-600 hover:text-blue-700"
            title="Clear filter"
          >
            Clear filter
          </Link>
        )}
      </div>
      {visibleProducts.length === 0 ? (
        <div className="bg-yellow-50 text-yellow-700 border border-yellow-200 p-4 rounded">
          No products found for “{toTitle(activeCategory)}”.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <Link
                to={`/products/${p.id}`}
                className="w-full aspect-square flex items-center justify-center overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 object-contain"
                  loading="lazy"
                />
              </Link>
              <Link
                to={`/products/${p.id}`}
                className="mt-4 text-sm font-medium text-gray-900 h-10 overflow-hidden hover:text-blue-600"
              >
                {p.title}
              </Link>
              <p className="text-xs text-gray-500 capitalize mt-1">
                {p.category}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-lg font-semibold text-gray-900">
                  ${Number(p.price).toFixed(2)}
                </span>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/products/${p.id}`}
                    className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
                  >
                    Details
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
