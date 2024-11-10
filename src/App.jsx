import "./App.css";
import ImageGallery from "./ImageGalary";
import animals from "./data/animal.json";
import AnimalAwarenessCard from "./AnimalCard";
import Header from "./components/header";
import Footer from "./Footer";
import Banner from "./components/banner";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AnimalAwarenessCard />
        <ImageGallery animals={animals} />
      </main>
      <Footer />
    </>
  );
}

export default App;
