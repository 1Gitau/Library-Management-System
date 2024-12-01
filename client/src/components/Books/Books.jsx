// import React from 'react'
// import './Books.css'
// function Books() {
//   return (
//     <div>
//       Books

//     </div>
//   )
// }

// export default Books

import React, { useState } from "react";
import "./Books.css";

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "1984",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "1984",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "1984",
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const handleEdit = (id) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      setBooks(
        books.map((book) =>
          book.id === id ? { ...book, title: newTitle } : book,
        ),
      );
    }
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="book-container">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <div className="book-image">
            <img src={book.imageUrl} alt={book.title} className="book-image" />
          </div>
          <div className="book-title">
            <h3 className="book-title">{book.title}</h3>
          </div>
          <div className="button-group">
            <button onClick={() => handleEdit(book.id)} className="btn-edit">
              Edit
            </button>
            <button
              onClick={() => handleDelete(book.id)}
              className="btn-delete"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
