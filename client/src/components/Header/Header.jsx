// import "./header.css";

// import { Link } from "react-router-dom";
// function HeaderNav() {
//   return (
//     <div className="navbar">
//       <h2 className="logo">BOOK STORE</h2>
//       <nav>
//         <ol className="navigation-list">
//           <li className="navigation-list-items">
//             <Link className="links" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="navigation-list-items">
//             <Link className="links" to="/books">
//               Books
//             </Link>
//           </li>
//           <li className="navigation-list-items">
//             <Link className="links" to="/login">
//               login
//             </Link>
//           </li>
//         </ol>
//       </nav>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header>
//       <HeaderNav />
//     </header>
//   );
// }
// export default Header;

import "./header.css";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <div className="navbar">
      <h2 className="logo">
        <Link to="/" className="logo-link">
          BOOK SHOP
        </Link>
      </h2>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-list-items">
            <Link className="links" to="/books">
              Books
            </Link>
          </li>

          <li className="navigation-list-items">
            <Link className="links" to="/addbook">
              Add book
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/addstudent">
              Add student
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/login">
              Login
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
