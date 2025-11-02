import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <span className="text-6xl">🛒</span>
            Daftar Products
          </h1>
          <p className="text-xl text-gray-600">
            Temukan produk elektronik terbaik untuk kebutuhan Anda
          </p>
          <div className="mt-4 inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
            {products.length} Produk Tersedia
          </div>
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-16 text-center">
            <div className="text-7xl mb-6">📦</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Belum Ada Produk
            </h3>
            <p className="text-gray-500 mb-6">
              Produk akan muncul di sini setelah ditambahkan
            </p>

            <Link
              to="/add-product"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Tambah Produk
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 group"
              >
                {/* Product Image Placeholder */}
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                    📱
                  </div>
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ID: {item.id}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem]">
                    {item.name}
                  </h3>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Harga</div>
                    <div className="text-3xl font-bold text-indigo-600">
                      Rp {Number(item.price).toLocaleString("id-ID")}
                    </div>
                  </div>

                  {/* Product Features */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      ✓ Garansi Resmi
                    </span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      ✓ Original
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span className="text-xl group-hover:animate-bounce">
                      🛒
                    </span>
                    Add To Cart
                  </button>

                  {/* Quick View Link */}
                  <div className="mt-3 text-center">
                    <button className="text-indigo-600 text-sm font-semibold hover:text-purple-600 transition-colors">
                      Lihat Detail →
                    </button>
                  </div>
                </div>

                {/* Hover Badge */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-3 left-3 bg-white text-indigo-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⚡ Best Seller
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {products.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3">
                Tidak Menemukan yang Anda Cari?
              </h3>
              <p className="text-indigo-100 mb-6">
                Hubungi customer service kami untuk bantuan lebih lanjut
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                💬 Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
