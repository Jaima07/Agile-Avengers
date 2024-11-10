import React from "react"

const AnimalAwarenessCard = () => {
  return (
    <div className='container my-5 d-flex justify-content-center'>
      <div className='card shadow-lg' style={{ maxWidth: "700px" }}>
        <div className='card-header bg-primary text-white'>
          <h3 className='card-title mb-0'>Connecting People with Animals</h3>
        </div>
        <div className='card-body'>
          <p className='card-text'>
            An animal-focused website serves to connect people with animals,
            fostering compassion and awareness. Its primary purpose can range
            from promoting pet adoption, where users can browse profiles of
            animals in need of homes, to educating visitors about various animal
            species, their behaviors, habitats, and roles in the ecosystem.
          </p>
          <p className='card-text'>
            For wildlife enthusiasts, such a site often raises awareness on
            conservation, providing information about endangered species and the
            environmental challenges they face, along with actionable ways to
            support their preservation.
          </p>
          <p className='card-text'>
            Additionally, animal websites are valuable resources for pet owners,
            offering guidance on pet care, health, grooming, and training,
            ensuring pets live happier and healthier lives.
          </p>
          <p className='card-text'>
            Many also advocate for ethical treatment, promoting awareness around
            issues like animal cruelty and wildlife exploitation, and
            encouraging humane practices and policies.
          </p>
          <p className='card-text'>
            By combining education, resources, and advocacy, an animal website
            can help build a compassionate community, empowering visitors to
            take meaningful actions toward animal welfare. Whether the focus is
            on adoption, conservation, or pet care, an animal website provides
            essential tools for supporting animals and helping them thrive.
          </p>
        </div>
        <div className='card-footer bg-light text-muted'>
          <small>
            Building compassion and awareness for a better world for animals.
          </small>
        </div>
      </div>
    </div>
  )
}

export default AnimalAwarenessCard
