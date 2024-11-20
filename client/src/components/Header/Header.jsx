import "./header.css";
import headerLogo from "../../assets/images/logo2.png"

import { Link } from "react-router-dom";
function HeaderNav() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={headerLogo} alt="BlogIt" />
        <h2 className="logo">Blogit</h2>
      </div>
    
      <nav>
        <ol className="navigation-list">
          <li className="navigation-list-items">
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/login">
              login
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/signup">
              signup
            </Link>
          </li>
      
        </ol>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header>
      <HeaderNav />
    </header>
  );
}
export default Header;
