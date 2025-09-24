import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import TestDrive from "./pages/TestDrive";
import SimulasiKredit from "./pages/SimulasiKredit";
import Testimoni from "./pages/Testimoni";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-mobil" element={<List />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/simulasi-kredit" element={<SimulasiKredit />} />
        <Route path="/booking-service" element={<Booking />} />
        <Route path="/testimoni" element={<Testimoni />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default App;
