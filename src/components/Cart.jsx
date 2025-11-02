import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, getTotalPrice, updateQuantity, deleteCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Keranjang Belanja
            </h1>
            <p className="text-gray-500 text-lg mb-8">
              Keranjang belanja Anda kosong.
            </p>
            <a
              href="/products"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Mulai Belanja
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span className="text-5xl">🛒</span>
          Keranjang Belanja
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        ID: {item.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-indigo-600">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all"
                      >
                        −
                      </button>
                      <span className="w-12 text-center font-bold text-lg text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => deleteCart(item)}
                      className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all"
                    >
                      🗑️ Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b">
                Ringkasan Belanja
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    Rp {getTotalPrice().toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Pengiriman</span>
                  <span className="font-semibold text-green-600">Gratis</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-indigo-600">
                    Rp {getTotalPrice().toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <a
                href="/checkout"
                className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Lanjut ke Checkout
              </a>

              <a
                href="/products"
                className="block mt-3 border-2 border-gray-300 text-gray-700 text-center py-3 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all"
              >
                Lanjut Belanja
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
