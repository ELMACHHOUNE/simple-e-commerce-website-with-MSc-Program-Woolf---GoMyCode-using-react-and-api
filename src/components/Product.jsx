import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchOne = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
        setStatus("ok");
      } catch (e) {
        setStatus("error");
      }
    };
    fetchOne();
  }, [id]);

  if (status === "loading") {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="h-6 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-200 rounded animate-pulse" />
          <div className="space-y-4">
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
            <div className="h-32 w-full bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  if (status === "error" || !product) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-red-50 text-red-700 border border-red-200 p-4 rounded">
          Failed to load this product.
        </div>
        <Link
          to="/products"
          className="inline-block mt-4 text-blue-600 hover:text-blue-700"
        >
          ← Back to products
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Link
        to="/products"
        className="text-blue-600 hover:text-blue-700 text-sm"
      >
        ← Back to products
      </Link>
      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
          <p className="mt-2 text-sm text-gray-500 capitalize">
            {product.category}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-semibold text-gray-900">
              ${Number(product.price).toFixed(2)}
            </span>
            {product.rating && (
              <span className="text-sm text-amber-600 bg-amber-50 border border-amber-200 px-2 py-1 rounded">
                ⭐ {product.rating.rate} • {product.rating.count} reviews
              </span>
            )}
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              className="px-5 py-3 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add to cart
            </button>
            <button
              type="button"
              className="px-5 py-3 rounded-md border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
