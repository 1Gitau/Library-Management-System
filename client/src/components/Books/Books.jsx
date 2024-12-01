// import React, { useEffect, useState } from 'react';
// import './Books.css';
// import apiUrl from '../../utils/apiUrl';

// function Books() {
//   const [books, setBooks] = useState([]); // Store books fetched from the API
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [borrowedBooks, setBorrowedBooks] = useState(new Set()); // Track borrowed books

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/user/getbooks`, {
//           credentials: 'include', // Send cookies with the request (if needed)
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch books');
//         }

//         const data = await response.json();
//         setBooks(data); // Store the fetched books
//       } catch (err) {
//         setError(err.message); // Set error message if API request fails
//       } finally {
//         setLoading(false); // Set loading to false after the request is done
//       }
//     };

//     fetchBooks(); // Fetch books when component mounts
//   }, []);

//   // Borrow a book by sending a POST request to the backend
//   const borrowBook = async (bookId) => {
//     try {
//       const response = await fetch(`${apiUrl}/user/borrowBook`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include', // Send cookies with the request (if needed)
//         body: JSON.stringify({ bookId }), // Send the bookId to mark as borrowed
//       });

//       if (!response.ok) {
//         throw new Error('Failed to borrow book');
//       }

//       // Mark the book as borrowed by adding it to the `borrowedBooks` set
//       setBorrowedBooks((prev) => new Set(prev).add(bookId));
//     } catch (err) {
//       setError(err.message); // Handle error if borrowing fails
//     }
//   };

//   if (loading) return <div>Loading books...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>All Books Created by Students</h1>
//       <div className="books-container">
//         {books.map((book) => (
//           <div key={book.id} className="book-card">
//             <img src={book.bookImage} alt={book.title} className="book-image" />
//             <h2 className="book-title">{book.title}</h2>
//             <button
//               className="borrow-button"
//               onClick={() => borrowBook(book.id)} // Borrow the book on button click
//               disabled={borrowedBooks.has(book.id)} // Disable the button if book is borrowed
//             >
//               {borrowedBooks.has(book.id) ? 'Borrowed' : 'Borrow'} {/* Change button text */}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Books;

import React, { useEffect, useState } from "react";
import "./Books.css";
import apiUrl from "../../utils/apiUrl";

function Books() {
  const [books, setBooks] = useState([]); // Store books fetched from the API
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${apiUrl}/user/getbooks`, {
          credentials: "include", // Send cookies with the request (if needed)
        });

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        setBooks(data); // Store the fetched books
      } catch (err) {
        setError(err.message); // Set error message if API request fails
      } finally {
        setLoading(false); // Set loading to false after the request is done
      }
    };

    fetchBooks(); // Fetch books when component mounts
  }, []);

  if (loading) return <div>Loading books...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>All Books Created by Students</h1>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.bookImage} alt={book.title} className="book-image" />
            <h2 className="book-title">{book.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
