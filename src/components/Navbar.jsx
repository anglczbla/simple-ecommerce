import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-4xl transform group-hover:scale-110 transition-transform">
              🛍️
            </span>
            <span className="text-2xl font-extrabold text-white tracking-tight">
              My Store
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="px-5 py-2.5 text-white font-semibold rounded-xl hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="px-5 py-2.5 text-white font-semibold rounded-xl hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Products
            </Link>

            <Link
              to="/add-product"
              className="px-5 py-2.5 text-white font-semibold rounded-xl hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Add Product
            </Link>

            <Link
              to="/cart"
              className="relative px-5 py-2.5 text-white font-semibold rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <span className="text-xl">🛒</span>
              Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            <Link
              to="/checkout"
              className="ml-2 px-6 py-2.5 bg-white text-indigo-700 font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
