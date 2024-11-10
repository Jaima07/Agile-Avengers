import { useState } from "react";
import "./App.css";
import ImageGallery from "./ImageGalary";
import animals from "./data/animal.json";
import AnimalAwarenessCard from "./AnimalCard";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1 className="mt-5">Hello, Bootstrap!</h1>
          <button className="btn btn-primary">Click Me</button>
        </div>
        <AnimalAwarenessCard />
        <ImageGallery animals={animals} />
      </main>
    </>
  );
}

export default App;
