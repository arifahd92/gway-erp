import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Main />
      <Footer />
    </>
  );
}
