import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [formcheckout, setFormcheckout] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
  });

  const [fixForm, setFixform] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormcheckout({ ...formcheckout, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFixform([...fixForm, formcheckout]);
    alert("Pesanan mu akan segera dikirim");

    clearCart();
    setFormcheckout({
      nama: "",
      email: "",
      telepon: "",
      alamat: "",
    });
  };

  return (
    <div>
      <h1>CheckOut</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="nama"
          value={formcheckout.nama}
          placeholder="Masukan nama anda"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formcheckout.email}
          placeholder="Masukan email anda"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="telepon"
          value={formcheckout.telepon}
          placeholder="Masukan no telepon anda"
          onChange={handleChange}
        />
        <input
          type="text"
          name="alamat"
          value={formcheckout.alamat}
          placeholder="Masukan alamat anda"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <ul>
              <li>ID: {item.id}</li>
              <li>Name Product: {item.name}</li>
              <li>Price: {item.price}</li>
              <li>Quantity: {item.quantity}</li>
            </ul>
          </div>
        ))}

        <div>
          <strong>Total: Rp.{getTotalPrice()}</strong>
        </div>

        <div>
          <button onClick={clearCart}>Clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
