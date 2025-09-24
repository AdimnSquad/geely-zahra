import React from "react";
import HeroSection from "../components/HeroSection";

const Home: React.FC = () => {
  return (
    <main>
      {/* Section Hero */}
      <HeroSection />
      {/* Produk & Swatches section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Produk Image */}
            <div className="col-lg-6">
              <img
                src="/image/download (1).jpg"
                alt="Produk Geely"
                className="img-fluid rounded-3 shadow"
              />
            </div>

            {/* Swatches */}
            <div className="col-lg-6">
              <h4 className="mb-3">Pilih Warna</h4>
              <div className="d-flex flex-wrap gap-3">
                <span
                  className="rounded-circle border me-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#f5f5f5",
                    display: "inline-block",
                  }}
                ></span>
                <span
                  className="rounded-circle border me-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#e0e0e0",
                    display: "inline-block",
                  }}
                ></span>
                <span
                  className="rounded-circle border me-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#1c75bc",
                    display: "inline-block",
                  }}
                ></span>
                <span
                  className="rounded-circle border me-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#006400",
                    display: "inline-block",
                  }}
                ></span>
                <span
                  className="rounded-circle border me-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#333",
                    display: "inline-block",
                  }}
                ></span>
              </div>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm p-4 text-center">
                <h3 className="fw-bold">Max</h3>
                <h2 className="text-dark">IDR 505.000.000*</h2>
                <p>2025 Special Price</p>
                <p className="text-muted">* OTR Jakarta</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm p-4 text-center">
                <h3 className="fw-bold">Pro</h3>
                <h2 className="text-dark">IDR 465.000.000*</h2>
                <p>2025 Special Price</p>
                <p className="text-muted">* OTR Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section className="container">
        <div className="row">
          <div className="col-lg-4">
            <img
              src="/image/new-generation.webp"
              alt="New Generation"
              className="img-fluid rounded-3 shadow"
            />
            <h4>Proses mudah dan cepat</h4>
            <p>
              Dapatkan mobil impian Anda dengan proses yang mudah dan cepat
              bersama kami.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="/image/ex5-feature-highlight-3_1.png-510x287.webp"
              alt=""
              className="img-fluid rounded-3 shadow"
            />
            <h4>Sales Berpengalaman</h4>
            <p>
              Pengalaman menjadi modal utama kami untuk terus memberikan
              pelayanan terbaik kepada konsumen.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="/image/excelent-in-comfort.png-510x287.webp"
              alt=""
              className="img-fluid rounded-3 shadow"
            />
            <h4>Harga Fleksibel</h4>
            <p>
              Kami menawarkan harga yang cocok sesuai anggaran belanja Anda
              untuk mendapatkan mobil impian Anda.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
