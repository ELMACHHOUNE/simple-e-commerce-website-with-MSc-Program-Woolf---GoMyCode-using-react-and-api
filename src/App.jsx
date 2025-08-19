import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Product from "./components/Product";
import NotFound from "./components/404"; // new
import { LoadingProvider } from "./context/LoadingContext";
import LoadingOverlay from "./components/LoadingOverlay";

const App = () => {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <LoadingOverlay />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LoadingProvider>
  );
};

export default App;
