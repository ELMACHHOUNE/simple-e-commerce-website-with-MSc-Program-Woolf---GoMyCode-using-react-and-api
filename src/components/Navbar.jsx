import { NavLink } from "react-router-dom";

const linkBase = "transition-colors text-sm sm:text-base";
const linkInactive = "text-gray-600 hover:text-blue-600";
const linkActive = "text-blue-600 font-semibold";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          MSc E-commerce website
        </NavLink>
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
