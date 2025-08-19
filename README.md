# MSc E-commerce website

A simple e-commerce UI built with:

- React + react-router-dom
- Axios (Fake Store API)
- Tailwind CSS
- Global loading overlay (Axios interceptors)
- Pagination (16 items per page)

Demo features

- Home: Intro/hero section
- Products: Fetches all products from https://fakestoreapi.com/products/, with:
  - Category filtering via query string (?category=...)
  - Pagination (16 per page) with query string (?page=...)
  - Product cards linking to product details
- Product Details: Dynamic route /products/:id with image, price, rating, and description
- Categories: Lists categories from the API, “View items” deep-links to filtered Products
- 404: Friendly not found page for invalid routes
- Global Loading: Fullscreen spinner during any Axios request

Getting started

1. Install dependencies:
   - npm install
2. Run the app:
   - npm run dev
3. Build:
   - npm run build

Project structure (key parts)
/src

- App.jsx: Router, layout, routes, 404
- components/
  - Navbar, Main, Footer
  - Products (list + filter + pagination)
  - Product (details)
  - Categories (list + deep link to Products)
  - Pagination (reusable)
  - LoadingOverlay (global loading indicator)
  - 404 (not found)
- context/
  - LoadingContext (Axios interceptors)

API

- Fake Store API: https://fakestoreapi.com/

Author

- GitHub: https://github.com/ELMACHHOUNE
