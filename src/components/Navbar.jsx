import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>🛍️ My Store</div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Home
        </Link>
        <Link
          to="/products"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Products
        </Link>
        <Link
          to="/add-product"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Add Product
        </Link>
        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            position: "relative",
          }}
        >
          🛒 Cart
          {getTotalItems() > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                backgroundColor: "#f44336",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {getTotalItems()}
            </span>
          )}
        </Link>
        <Link
          to="/checkout"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
