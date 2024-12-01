import React from "react";

function StudentNav() {
  return (
    <div>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-list-items">
            <Link className="links" to="/viewbooks">
              View Books
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/mybooks">
              My Books
            </Link>
          </li>
          <li className="navigation-list-items">
            <Link className="links" to="/logout">
              Logout
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default StudentNav;
