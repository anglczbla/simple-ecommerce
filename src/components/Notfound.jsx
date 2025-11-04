import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100 text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Icon */}
          <div className="text-8xl mb-6 animate-bounce">🔍</div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Halaman Tidak Ditemukan
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8">
            Oops! Halaman yang Anda cari tidak ada atau telah dipindahkan.
            <br />
            Silakan kembali ke halaman utama.
          </p>

          {/* Back Button */}
          <Link to="/">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              <span className="text-xl">←</span>
              Kembali ke Home
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-6 bg-yellow-50 rounded-xl p-6 border-2 border-yellow-100">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-bold text-yellow-900 mb-1">Butuh Bantuan?</h3>
              <p className="text-yellow-700 text-sm">
                Jika Anda yakin halaman ini seharusnya ada, silakan hubungi
                administrator atau periksa kembali URL yang Anda masukkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
