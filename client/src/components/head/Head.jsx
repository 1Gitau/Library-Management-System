import "./head.css";
import headerLogo from "../../assets/images/logo1.png"

import userStoreDetails from "../../Store/userStoreDetails";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
function HeadNav() {

    const logout = userStoreDetails((state) => state.logout);
    const navigate = useNavigate();
    function handleLogout(e) {
      e.preventDefault();
      logout();
      toast.success("Logged out successfully", {
        duration: 4000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
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
            <Link className="links" to="/writing">
              Write
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/blog-feed">
              feed
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/blog-listing">
              blogs
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/update-password">
              My profile
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
