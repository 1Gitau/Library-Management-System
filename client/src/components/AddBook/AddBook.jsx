// // import React from "react";
// // import "./AddBook.css";
// // // import { useState } from "react";
// // import{useNavigate} from 'react-router-dom';

// // const AddBook = () => {
// //   const(name,setName)= useState('');
// //   const(author,setAuthor)= useState('');
// //   const(imageUrl, setImageUrl)= useState('');
// //   const navigate = useNavigate();

// //   const handlesubmit = (e) => {
// //     e.preventDefault();
// //     const book = {name,author,imageUrl};
// // }

// // function AddBook() {
// //   return (
// //     <div className="student-form-container">
// //       <form className="student-form">
// //         <h2>Add Book</h2>
// //         <div className="form-group">
// //           <label htmlfor="book">Title:</label>
// //           <input
// //             type="text"
// //             name="book"
// //             id="book"
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </div>
// //         {/* <div className="form-group">
// //           <label htmlfor="Author">Author Name</label>
// //           <input
// //             type="text"
// //             name="author"
// //             id="author"
// //             onChange={(e) => setAuthor(e.target.value)}
// //           />
// //         </div> */}
// //         <div className="form-group">
// //           <label htmlfor="image">Image Url</label>
// //           <input
// //             type="text"
// //             name="image"
// //             id="image"
// //             onChange={(e) => setImageUrl(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <button type="submit">Add Book</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AddBook;

// import React, { useState } from "react";
// import "./AddBook.css";
// import { useMutation } from "react-query"; // Import for mutation
// import { toast } from "sonner"; // Toast notifications
// import apiUrl from "../../utils/apiUrl"; // Utility to get API base URL

// function AddBook() {
//   const [title, setName] = useState("");
//   const [ bookImage, setImageUrl] = useState("");

//   // Define mutation to send data to the backend
//   const { mutate, isLoading } = useMutation({
//     mutationFn: async (newBook) => {
//       const response = await fetch(`${apiUrl}/user/addbooks`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newBook),
//         credentials: "include",
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to add book");
//       }

//       return response.json();
//     },
//     onSuccess: () => {
//       toast.success("Book added successfully");
//       setName("");
//       setImageUrl("");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     mutate({ title, bookImage});
//   };

//   return (
//     <div className="student-form-container">
//       <form className="student-form" onSubmit={handleSubmit}>
//         <h2>Add Book</h2>
//         <div className="form-group">
//           <label htmlFor="book">Title:</label>
//           <input
//             type="text"
//             title="book"
//             id="book"
//             value={title}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="image">Book image</label>
//           <input
//             type="text"
//             title="image"
//             id="image"
//             value={bookImage}
//             onChange={(e) => setImageUrl(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? "Adding Book..." : "Add Book"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddBook;

import React, { useState } from "react";
import "./AddBook.css";
import { useMutation } from "react-query"; // Import for mutation
import { toast } from "sonner"; // Toast notifications
import { useNavigate } from "react-router-dom"; // Import for navigation
import apiUrl from "../../utils/apiUrl"; // Utility to get API base URL

function AddBook() {
  const [title, setName] = useState("");
  const [bookImage, setImageUrl] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Define mutation to send data to the backend
  const { mutate, isLoading } = useMutation({
    mutationFn: async (newBook) => {
      const response = await fetch(`${apiUrl}/user/addbooks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add book");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Book added successfully");
      setName("");
      setImageUrl("");
      navigate("/books"); // Navigate to the Books page
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ title, bookImage });
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <div className="form-group">
          <label htmlFor="book">Title:</label>
          <input
            type="text"
            name="book"
            id="book"
            value={title}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Book Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={bookImage}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Adding Book..." : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
