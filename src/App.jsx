import "./App.css"
import Header from "./components/header"
import Footer from "./Footer"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import ImageGalleryPage from "./pages/image-gallary"
import Diet from "./pages/diet"
import ImageDetailPage from "./pages/image-details"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/image-gallery' element={<ImageGalleryPage />} />
        <Route path='/diet' element={<Diet />} />
        <Route path='/image/:imageId' element={<ImageDetailPage />} />{" "}
        {/* New Route */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
