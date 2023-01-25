import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <div className='card text-center'>
    <div className='card-header'>
      <nav className='nav nav-pills card-header-pills'>
        <NavLink exact to='/' className='nav-link' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/images' className='nav-link' activeClassName='active'>
          Images
        </NavLink>
        <NavLink to='/videos' className='nav-link' activeClassName='active'>
          Video
        </NavLink>
        <NavLink to='/about' className='nav-link' activeClassName='active'>
          About
        </NavLink>
      </nav>
    </div>
  </div>
)

export default Navigation
