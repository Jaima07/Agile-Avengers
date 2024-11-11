import React from "react"
import Banner from "../../components/banner"
import AnimalAwarenessCard from "../../AnimalCard"
import { Link } from "react-router-dom"
import ImageGallery from "../../components/image-gallary"

const HomePage = () => {
  return (
    <main>
      <Banner />
      <div className='bg-info p-2'>
        <AnimalAwarenessCard />
      </div>
      <div className='p-3 m-auto'>
        <h2 className='text-center'>Image Gallery</h2>
        <ImageGallery />
        <div className='text-center'>
          <Link to='/image-gallery'>
            <button className='btn btn-warning'>Show More</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default HomePage
