import React from "react";

function AdminNav() {
  return (
    <nav>
      <ol className="navigation-list">
        <li className="navigation-list-items">
          <Link className="links" to="/books">
            Books
          </Link>
        </li>
        <li className="navigation-list-items">
          <Link className="links" to="/addbook">
            Add Books
          </Link>
        </li>
        <li className="navigation-list-items">
          <Link className="links" to="/addstudent">
            Add Student
          </Link>
        </li>
        <li className="navigation-list-items">
          <Link className="links" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="navigation-list-items">
          <Link className="links" to="/logout">
            Logout
          </Link>
        </li>
      </ol>
    </nav>
  );
}

export default AdminNav;
