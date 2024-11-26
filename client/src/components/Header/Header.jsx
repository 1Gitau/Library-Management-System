import "./header.css";

import { Link } from "react-router-dom";
function HeaderNav() {
  return (
    <div className="navbar">
      <h2 className="logo">LMS</h2>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-list-items">
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/categories">
              Books Categories
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/login">
              login
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/signup">
              Signup
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
