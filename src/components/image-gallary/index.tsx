import React from "react"
import animals from "../../data/animal.json"
import { Link } from "react-router-dom"

const ImageGallery = () => {
  return (
    <div className='container my-4'>
      <div className='row'>
        {animals.map((animal, index) => (
          <Link
            to={`/image/${animal.id}`}
            key={index}
            className='col-6 col-md-4 col-lg-3 mb-4'
          >
            <div key={index}>
              <div className='card h-100' style={{ overflow: "hidden" }}>
                <img
                  src={animal.image}
                  alt={animal.name}
                  className='card-img-top'
                  style={{ objectFit: "cover", height: "200px", width: "100%" }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{animal.name}</h5>
                  <p className='card-text'>
                    <strong>Habitat:</strong> {animal.characteristics.habitat}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
