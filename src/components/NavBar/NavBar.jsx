import { Link } from 'react-router-dom';
import './navbar.scss'
const NavBar = () => {
    return (
      <nav className="navbar">
        <Link className="navbar__link" to="/">Home</Link>
        <Link className="navbar__link" to="/">Tech Stack</Link>
        <Link className="navbar__link" to="/">Projects</Link>
        <Link className="navbar__link" to="/">Contact</Link>
      </nav>
    )
}

export default NavBar;
