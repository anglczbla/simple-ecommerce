import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="mb-8 animate-bounce">
          <span className="text-8xl">🛍️</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Selamat Datang
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Platform belanja online terbaik untuk kebutuhan elektronik Anda dengan
          harga terjangkau dan kualitas terpercaya
        </p>

        <Link to="/products">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1">
            🚀 Mulai Belanja Sekarang
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg">
              📦
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Produk Berkualitas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kami menyediakan produk elektronik terbaik dengan harga kompetitif
              dan garansi resmi
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg">
              🚚
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pengiriman Cepat
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pesanan Anda akan segera dikirim ke alamat tujuan dengan packaging
              aman
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg">
              💳
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pembayaran Mudah
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Berbagai metode pembayaran untuk kemudahan dan keamanan transaksi
              Anda
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-110 transition-all">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-indigo-100">Produk</div>
            </div>
            <div className="transform hover:scale-110 transition-all">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-indigo-100">Pelanggan</div>
            </div>
            <div className="transform hover:scale-110 transition-all">
              <div className="text-5xl font-bold mb-2">4.8★</div>
              <div className="text-indigo-100">Rating</div>
            </div>
            <div className="transform hover:scale-110 transition-all">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-indigo-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap untuk Belanja?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Dapatkan penawaran terbaik dan promo menarik setiap hari!
          </p>
          <Link to="/products">
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              Lihat Semua Produk →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
