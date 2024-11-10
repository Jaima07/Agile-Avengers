import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <div className="position-relative text-center  text-white">
          <img
            src="https://img.freepik.com/premium-vector/african-animals-poster-with-lion-crocodile-banners_1324816-25261.jpg" // Replace with your lion image URL
            alt="Lion"
            className="w-100 p-5"
            style={{ opacity: 0.7, maxHeight: "500px", objectFit: "cover" }}
          />

          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="display-4 fw-bold text-info">Majestic Lion</h1>
            <p className="lead text-info">
              Discover the beauty and strength of the king of the jungle.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="position-relative text-center  text-white">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/134/711/non_2x/horizontal-banner-with-cute-african-animals-wild-animals-among-tropical-plants-zebra-lion-giraffe-antelope-and-rhinoceros-in-flat-cartoon-style-jungle-vector.jpg" // Replace with your lion image URL
            alt="Lion"
            className="w-100 p-5"
            style={{ opacity: 0.7, maxHeight: "500px", objectFit: "cover" }}
          />

          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="display-4 fw-bold text-info">Majestic Lion</h1>
            <p className="lead text-info">
              Discover the beauty and strength of the king of the jungle.
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
