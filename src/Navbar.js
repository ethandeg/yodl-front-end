import {Link} from "react-router-dom"
const Navbar = () => {
    return (
<nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className="container">
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img
            src='https://bulma.io/images/bulma-logo.png'
            alt='Logo'
            width='112'
            height='28'
          />
        </Link>

        <a
          role='button'
          className={'navbar-burger burger'}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Link to='/admin' className='navbar-item'>
              Admin
            </Link>
            <Link to='/users/new' className='navbar-item'>
              Register
            </Link>
          </div>
        </div>
      </div>
      </div>
    </nav>
    )
}


export default Navbar