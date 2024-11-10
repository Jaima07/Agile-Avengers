import React from "react";
import Banner from "../../components/banner";
import AnimalAwarenessCard from "../../AnimalCard";
import ImageGallery from "../../ImageGalary";
import animals from "../../data/animal.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <div className="bg-info p-2">
        <AnimalAwarenessCard />
      </div>
      <div className="p-3 m-auto">
        <h2 className="text-center">Image Gallery</h2>
        <ImageGallery animals={animals} />
        <div className="text-center">
          <Link to="/image-gallery">
            <button className="btn btn-warning">Show More</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
