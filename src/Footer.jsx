const Footer = () => {
  return (
    <footer className='bg-info text-white py-3 mt-auto'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
            <a href='#home' className='text-white text-decoration-none mx-2'>
              Home
            </a>
            <a href='#about' className='text-white text-decoration-none mx-2'>
              About
            </a>
            <a href='#contact' className='text-white text-decoration-none mx-2'>
              Contact
            </a>
          </div>
          <div className='col-md-6 text-center text-md-end'>
            <p className='mb-0'>
              &copy; 2024 Agile Avengers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
