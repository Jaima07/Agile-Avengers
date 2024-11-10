import { useState } from "react"
import "./App.css"
import ImageGallery from "./ImageGalary"
import animals from "./data/animal.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className='container'>
        <h1 className='mt-5'>Hello, Bootstrap!</h1>
        <button className='btn btn-primary'>Click Me</button>
      </div>
      <ImageGallery animals={animals} />
    </main>
  )
}

export default App
