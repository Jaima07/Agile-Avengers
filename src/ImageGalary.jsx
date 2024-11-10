import React from "react"

const ImageGallery = ({ animals }) => {
  return (
    <div className='container my-4'>
      <div className='row'>
        {animals.map((animal, index) => (
          <div key={index} className='col-6 col-md-4 col-lg-3 mb-4'>
            <div
              className='card'
              style={{ height: "200px", overflow: "hidden" }}
            >
              <img
                src={animal.image}
                alt={animal.name}
                className='card-img-top'
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
