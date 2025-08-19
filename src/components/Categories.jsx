import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const accentClasses = [
  "bg-blue-100 text-blue-700 ring-blue-200",
  "bg-emerald-100 text-emerald-700 ring-emerald-200",
  "bg-amber-100 text-amber-700 ring-amber-200",
  "bg-rose-100 text-rose-700 ring-rose-200",
  "bg-purple-100 text-purple-700 ring-purple-200",
  "bg-sky-100 text-sky-700 ring-sky-200",
];

const prettify = (s) =>
  s
    .split(/[\s-]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(data || []);
        setStatus("ok");
      } catch (e) {
        setStatus("error");
      }
    };
    fetchCategories();
  }, []);

  if (status === "loading") {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-5 animate-pulse"
            >
              <div className="h-10 w-10 rounded-full bg-gray-200 mb-4" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
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
          Failed to load categories. Please try again later.
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((c, idx) => {
          const accent = accentClasses[idx % accentClasses.length];
          return (
            <article
              key={c}
              className="group bg-white rounded-xl shadow hover:shadow-lg transition p-5 ring-1 ring-gray-100"
            >
              <div
                className={`h-12 w-12 rounded-full ring-8 ${accent} flex items-center justify-center mb-4`}
                aria-hidden
              >
                <span className="text-lg font-bold">
                  {prettify(c).charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {prettify(c)}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Explore the latest in {c.toLowerCase()}.
              </p>
              <Link
                to={`/products?category=${encodeURIComponent(c)}`}
                className="mt-4 inline-flex items-center text-sm text-blue-600 group-hover:text-blue-700"
                title={`View items in ${prettify(c)}`}
              >
                View items →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
