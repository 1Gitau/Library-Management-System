// import React from 'react';
// import { Link } from 'react-router-dom';
// import './BookListing.css';
// import { useQuery } from 'react-query';
// import apiUrl from '../../utils/apiUrl';

// // Individual Book Card Component
// function BookCard({ id, title, bookImage, owner }) {
//   return (
//     <div className="book-card">
//       {/* Book Image */}
//       <img src={bookImage} alt={title} className="book-image" />

//       {/* Book Content */}
//       <div className="book-content">
//         <h3>{title}</h3>

//         {/* Book Owner */}
//         <div className="book-owner-info">
//           <span className="book-owner">Owned by: {owner}</span>
//         </div>

//         {/* Read More Link */}
//         <Link to={`/book/${id}`} className="read-more-btn">
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Main Book Listing Component
// function BookListing() {
//   const { isLoading, isError, error, data } = useQuery({
//     queryKey: ['books'],
//     queryFn: async () => {
//       const response = await fetch(`${apiUrl}/books`, { credentials: 'include' });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }

//       const data = await response.json();
//       return data;
//     },
//   });

//   // Loading State
//   if (isLoading) {
//     return <div>Loading, please wait...</div>;
//   }

//   // Error State
//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   // Book List
//   return (
//     <div className="book-listing">
//       {data.books.map((book) => (
//         <BookCard
//           key={book.id}
//           id={book.id}
//           title={book.title}
//           bookImage={book.bookImage}
//           owner={book.owner}
//         />
//       ))}
//     </div>
//   );
// }

// export default BookListing;
