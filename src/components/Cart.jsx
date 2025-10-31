import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, getTotalPrice, updateQuantity, deleteCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h1>Keranjang Belanja</h1>
        <p>Keranjang belanja Anda kosong.</p>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Keranjang Belanja</h1>

        {cart.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <ul>
              <li>ID: {item.id}</li>
              <li>Nama: {item.name}</li>
              <li>Harga: Rp.{item.price}</li>
              <li>Jumlah: {item.quantity}</li>
            </ul>

            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              Kurang
            </button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              Tambah
            </button>
            <button onClick={() => deleteCart(item)}>Hapus</button>
          </div>
        ))}

        <p>
          <strong>Total: Rp.{getTotalPrice()}</strong>
        </p>
      </div>
    </>
  );
};

export default Cart;
