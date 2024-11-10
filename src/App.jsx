import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ImageGalleryPage from "./pages/image-gallary";
import Diet from "./pages/diet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image-gallery" element={<ImageGalleryPage />} />
        <Route path="/diet" element={<Diet />} />
        {/* Add other routes as necessary */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
