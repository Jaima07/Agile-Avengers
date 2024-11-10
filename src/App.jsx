import "./App.css"
import ImageGallery from "./ImageGalary"
import animals from "./data/animal.json"
import AnimalAwarenessCard from "./AnimalCard"
import Header from "./components/header"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <AnimalAwarenessCard />
        <ImageGallery animals={animals} />
      </main>
      <Footer />
    </>
  )
}

export default App
