import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Selamat Datang 🛍️
      </h1>
      <p style={{ fontSize: "20px", color: "#666", marginBottom: "40px" }}>
        Platform belanja online terbaik untuk kebutuhan elektronik Anda
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>📦</div>
          <h3>Produk Berkualitas</h3>
          <p style={{ color: "#666" }}>
            Kami menyediakan produk elektronik terbaik dengan harga kompetitif
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>🚚</div>
          <h3>Pengiriman Cepat</h3>
          <p style={{ color: "#666" }}>
            Pesanan Anda akan segera dikirim ke alamat tujuan
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>💳</div>
          <h3>Pembayaran Mudah</h3>
          <p style={{ color: "#666" }}>
            Berbagai metode pembayaran untuk kemudahan Anda
          </p>
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <Link to="/products">
          <button
            style={{
              padding: "15px 40px",
              fontSize: "18px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            Mulai Belanja Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
