import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100 text-center max-w-md">
          <div className="text-8xl mb-6">😢</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Produk Tidak Ditemukan
          </h1>
          <p className="text-gray-600 mb-6">
            Produk dengan ID{" "}
            <span className="font-bold text-indigo-600">{id}</span> tidak
            ditemukan.
          </p>
          <Link to="/products">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
              ← Kembali ke Product List
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Jika produk ditemukan
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Product Detail Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-5xl">📦</span>
            <h1 className="text-4xl font-bold text-gray-800">Product Detail</h1>
          </div>

          <div className="space-y-6">
            {/* Product ID */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Product ID
              </label>
              <div className="flex items-center gap-3">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-lg font-bold">
                  {product.id}
                </span>
              </div>
            </div>

            {/* Product Name */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Product Name
              </label>
              <p className="text-3xl font-bold text-gray-800">{product.name}</p>
            </div>

            {/* Product Price */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Price
              </label>
              <p className="text-4xl font-bold text-green-600">
                Rp {Number(product.price).toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <Link to="/products" className="flex-1">
              <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                ← Back to List
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Info Card (Optional) */}
        <div className="mt-6 bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-bold text-blue-900 mb-1">
                Product Information
              </h3>
              <p className="text-blue-700 text-sm">
                Anda sedang melihat detail produk dengan ID{" "}
                <span className="font-bold">{product.id}</span>. Gunakan tombol
                di atas untuk kembali ke daftar produk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
