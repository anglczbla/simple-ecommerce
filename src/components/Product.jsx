import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Product = () => {
  const {
    handleChangeProduct,
    submitNewProduct,
    formProduct,
    products,
    editProduct,
    setEditProduct,
    saveEdit,
    handleEditProduct,
    deleteProduct,
  } = useContext(ProductContext);
  const [showEdit, setShowEdit] = useState(null);

  const toggleEdit = (product, index) => {
    setShowEdit(index);
    setEditProduct(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Add Product Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">➕</span>
            Add New Product
          </h1>

          <form onSubmit={submitNewProduct} className="space-y-5">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product ID
                </label>
                <input
                  type="text"
                  name="id"
                  value={formProduct.id}
                  placeholder="Masukan ID Product"
                  onChange={handleChangeProduct}
                  required
                  className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formProduct.name}
                  placeholder="Masukan nama Product"
                  onChange={handleChangeProduct}
                  required
                  className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formProduct.price}
                  placeholder="Masukan price Product"
                  onChange={handleChangeProduct}
                  required
                  className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              ✨ Submit New Product
            </button>
          </form>
        </div>

        {/* Product List Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">📋</span>
            List Products
            <span className="ml-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
              {products.length} Products
            </span>
          </h1>

          <div className="space-y-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-indigo-300 transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                        ID: {item.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-indigo-600">
                      Rp {Number(item.price).toLocaleString("id-ID")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleEdit(item, index)}
                      className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(item)}
                      className="px-5 py-2.5 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>

                {showEdit === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                    <h4 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                      <span>✏️</span> Edit Product
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Product ID
                        </label>
                        <input
                          type="text"
                          name="id"
                          value={editProduct.id}
                          placeholder="Masukan id baru product"
                          onChange={handleEditProduct}
                          className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={editProduct.name}
                          placeholder="Masukan nama baru product"
                          onChange={handleEditProduct}
                          className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          value={editProduct.price}
                          placeholder="Masukan harga baru product"
                          onChange={handleEditProduct}
                          className=" px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => saveEdit(editProduct, index)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                      >
                        💾 Save Changes
                      </button>
                      <button
                        onClick={() => setShowEdit(null)}
                        className="px-6 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-all"
                      >
                        ✖️
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-gray-500 text-lg">
                Belum ada produk. Tambahkan produk pertama Anda!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
