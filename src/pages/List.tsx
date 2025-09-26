import React from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";

interface Mobil {
  id: string;
  nama: string;
  slug: string;
  cover?: string;
  colors?: string[];
}

const List: React.FC = () => {
  const [mobils, setMobils] = useState<Mobil[]>([]);

  useEffect(() => {
    const fetchMobils = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mobil"));
        const data = querySnapshot.docs.map((doc) => {
          const mobilData = doc.data();

          // 🔑 transformasi colors { color1, color2, ... } ➝ [ "#fff", "#000", ... ]
          let colorsArray: string[] = [];
          if (mobilData.colors && mobilData.colors.length > 0) {
            const colorObj = mobilData.colors[0]; // ambil object pertama
            colorsArray = Object.values(colorObj); // ambil semua value (hex)
          }

          return {
            id: doc.id,
            ...mobilData,
            colors: colorsArray,
          } as Mobil;
        });
        setMobils(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchMobils();
  }, []);

  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
          <div className="row">
            {mobils.map((mobil) => (
              <div className="col-lg-3 col-md-6 mb-4" key={mobil.id}>
                <div className="card shadow-sm border-0 rounded-3">
                  <div className="position-relative">
                    <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                      New
                    </span>
                    <img
                      src={mobil.cover || "/image/starray-em1.jpg"}
                      alt="Geely Starray EM-1"
                      className="img-fluid rounded-top p-3"
                    />
                  </div>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center mb-3">
                      {mobil.colors?.length ? (
                        mobil.colors.map((color, index) => (
                          <span
                            className="rounded-circle border me-2"
                            key={index}
                            style={{
                              width: "20px",
                              height: "20px",
                              background: color,
                              display: "inline-block",
                            }}
                          ></span>
                        ))
                      ) : (
                        <small className="text-muted">No Color</small>
                      )}
                    </div>

                    {/* Tombol Brand */}
                    <a
                      href=""
                      className="btn btn-info btn-sm text-white fw-bold"
                    >
                      Geely
                    </a>
                    {/* Nama Mobil */}
                    <h6 className="fw-bold mb-0">{mobil.nama}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionFooterImage />
    </>
  );
};

export default List;
