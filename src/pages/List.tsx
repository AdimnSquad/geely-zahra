import React from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";

const List: React.FC = () => {
  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow-sm border-0 rounded-3">
                <div className="position-relative">
                  <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                    New
                  </span>
                  <img
                    src="/image/car/glacier-blue23-247x129.png"
                    alt="Geely Starray EM-1"
                    className="img-fluid rounded-top p-3"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center mb-3">
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

                  {/* Tombol Brand */}
                  <a href="" className="btn btn-info btn-sm text-white fw-bold">Geely</a>
                  {/* Nama Mobil */}
                  <h6 className="fw-bold mb-0">Geely Starray EM-I</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow-sm border-0 rounded-3">
                <div className="position-relative">
                  <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                    New
                  </span>
                  <img
                    src="/image/car/teal-247x129.png"
                    alt="Geely EX5"
                    className="img-fluid rounded-top p-3"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center mb-3">
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

                  {/* Tombol Brand */}
                  <a href="" className="btn btn-info btn-sm text-white fw-bold">Geely</a>
                  {/* Nama Mobil */}
                  <h6 className="fw-bold mb-0">Geely EX5</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <SectionFooterImage />
    </>
  );
};

export default List;
