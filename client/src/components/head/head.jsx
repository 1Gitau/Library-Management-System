import "./head.css";

import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import userDetailsStore from "../../Store/userStoreDetails";

function HeadNav() {
  const logout = userDetailsStore((state) => state.logout);
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    logout();
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }
  return (
    <div className="navbar">
      <div className="logo-container">
        <h2 className="logo">LMS</h2>
      </div>

      <nav>
        <ol className="navigation-list">
          <li className="navigation-list-items">
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/store">
              store
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/mybooks">
              mybooks
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/book-categories">
              Book categories
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" onClick={handleLogout}>
              logout
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

function Head() {
  return (
    <header>
      <HeadNav />
    </header>
  );
}
export default Head;
