import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
  return (
    <header className='bg-light shadow-sm'>
      <nav className='navbar navbar-expand-lg navbar-light container '>
        {/* Logo */}
        <Link to='/' className='navbar-brands'>
          <img
            src={"/animal.png"}
            alt='Logo'
            className='logo'
            style={{ height: "80px", width: "175px" }}
          />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navigation Links */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto '>
            <li className='nav-item '>
              <Link to='/image-gallery' className='nav-link text-info'>
                Image Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/diet' className='nav-link text-info'>
                Diet
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/mating-and-reproduction'
                className='nav-link text-info'
              >
                Mating and Reproduction
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/habitat' className='nav-link text-info'>
                Habitat
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/anatomy-and-biology' className='nav-link text-info'>
                Anatomy & Biology
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/behavior' className='nav-link text-info'>
                Behavior
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link text-info'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link text-info'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
