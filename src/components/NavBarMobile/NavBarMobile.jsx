import './nav-mobile.scss'
import {useState} from 'react';

const NavBarMobile = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div onClick={() => setChecked(!checked)} className={`menu ${checked ? 'menu_active' : ''}`}>
        <div className="menu__bar"></div>
        <nav className="menu__nav">
          <ul className="menu__list">
            <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
            <li className="menu__item"><a className="menu__link" href="#">About</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Clients</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>

    </>
  )
}

export default NavBarMobile;
