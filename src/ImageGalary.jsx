import React from "react"

const ImageGallery = ({ animals }) => {
  return (
    <div className='container my-4'>
      <div className='row'>
        {animals.map((animal, index) => (
          <div key={index} className='col-6 col-md-4 col-lg-3 mb-4'>
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
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
