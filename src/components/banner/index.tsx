import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Banner = () => {
  return (
    <div className="container-fluid p-0">
      <div className="position-relative text-center bg-dark text-white">
        {/* Lion Image */}
        <img
          src="https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg" // Replace with your lion image URL
          alt="Lion"
          className="w-100 p-5"
          style={{ opacity: 0.7, maxHeight: "500px", objectFit: "cover" }}
        />
        {/* Text Overlay */}
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4 fw-bold">Majestic Lion</h1>
          <p className="lead">
            Discover the beauty and strength of the king of the jungle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
