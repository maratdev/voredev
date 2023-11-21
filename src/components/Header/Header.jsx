import { Link } from "react-router-dom";
import { useIsMobile } from "../../utils/utilities";
import PropTypes from "prop-types";
import "./header.scss";
import logoXl from "../../img/voredev.svg";
import logoS from "../../img/voredev-s.svg";

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="header__wrap">
        <Link to="/#">
          <img
            className="header__logo"
            src={!useIsMobile(425) ? logoXl : logoS}
            alt="логотип"
          />
        </Link>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
