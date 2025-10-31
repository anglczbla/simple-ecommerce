import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, getTotalPrice, updateQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h1>Keranjang Belanja</h1>
        <p>Keranjang Belanja anda Kosong</p>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Cart</h1>
        {cart.map((item, index) => (
          <div key={index}>
            <ul>
              <li>ID: {item.id}</li>
              <li>NAMA: {item.name}</li>
              <li>HARGA: RP.{item.price}</li>
            </ul>
          </div>
        ))}
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          Kurang
        </button>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          Tambah
        </button>
      </div>

      <p>Total: {getTotalPrice()}</p>
    </>
  );
};

export default Cart;
