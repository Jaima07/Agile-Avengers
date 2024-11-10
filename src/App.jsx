import { useState } from "react";
import "./App.css";
import ImageGallery from "./ImageGalary";
import animals from "./data/animal.json";
import AnimalAwarenessCard from "./AnimalCard";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container"></div>
        <AnimalAwarenessCard />
        <ImageGallery animals={animals} />
      </main>
    </>
  );
}

export default App;
