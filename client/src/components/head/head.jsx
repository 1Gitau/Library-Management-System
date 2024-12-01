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
        <h2 className="logo">Book Store</h2>
      </div>

      <nav>
        <ol className="navigation-list">
          {/* <li className="navigation-list-items">
            <Link className="links" to="/">
              Books
            </Link>
          </li> */}
          <li className="navigation-list-items">
            <Link className="links" to="/mybooks">
              My Books
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/viewbooks">
              View Books
            </Link>
          </li>

          {/* <li className="navigation-list-items">
            <Link className="links" to="/dashboard">
              Dashboard
            </Link>
          </li> */}
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
