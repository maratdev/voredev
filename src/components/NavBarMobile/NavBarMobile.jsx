import './nav-mobile.scss'
import {useState} from 'react';

const NavBarMobile = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div onClick={() => setChecked(!checked)} className={`menu ${checked ? 'menu_active' : ''}`}>
        <div className="menu__bar"></div>
        <nav className="menu__list">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>

    </>
  )
}

export default NavBarMobile;
