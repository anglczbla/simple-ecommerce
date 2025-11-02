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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span className="text-5xl">📦</span>
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b flex items-center gap-2">
              <span>📝</span> Informasi Pengiriman
            </h2>

            <form onSubmit={submitForm} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formcheckout.nama}
                  placeholder="Masukan nama anda"
                  onChange={handleChange}
                  required
                  className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formcheckout.email}
                  placeholder="Masukan email anda"
                  onChange={handleChange}
                  required
                  className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  No. Telepon
                </label>
                <input
                  type="tel"
                  name="telepon"
                  value={formcheckout.telepon}
                  placeholder="Masukan no telepon anda"
                  onChange={handleChange}
                  required
                  className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alamat Lengkap
                </label>
                <textarea
                  name="alamat"
                  value={formcheckout.alamat}
                  placeholder="Masukan alamat lengkap anda"
                  onChange={handleChange}
                  required
                  rows="4"
                  className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                🚀 Proses Pesanan
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b flex items-center gap-2">
                <span>🛍️</span> Ringkasan Pesanan
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🛒</div>
                  <p className="text-gray-500">Keranjang kosong</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">ID: {item.id}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Rp {item.price.toLocaleString("id-ID")} ×{" "}
                          {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-indigo-600">
                          Rp{" "}
                          {(item.price * item.quantity).toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        Rp {getTotalPrice().toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Ongkir</span>
                      <span className="font-semibold text-green-600">
                        Gratis
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-xl font-bold text-gray-800">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-indigo-600">
                        Rp {getTotalPrice().toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={clearCart}
                    className=" mt-4 border-2 border-red-300 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                  >
                    🗑️ Kosongkan Keranjang
                  </button>
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl mb-2">🔒</div>
                <p className="text-xs font-semibold text-gray-700">
                  Aman & Terpercaya
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl mb-2">🚚</div>
                <p className="text-xs font-semibold text-gray-700">
                  Gratis Ongkir
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl mb-2">💯</div>
                <p className="text-xs font-semibold text-gray-700">
                  Garansi 100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
