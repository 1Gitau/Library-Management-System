import React from "react";
import "./AddBook.css";
// import { useState } from "react";
// import{useNavigate} from 'react-router-dom';

// const AddBook = () => {
//   const(name,setName)= useState('');
//   const(author,setAuthor)= useState('');
//   const(imageUrl, setImageUrl)= useState('');
//   const navigate = useNavigate();

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     const book = {name,author,imageUrl};
// }

function AddBook() {
  return (
    <div className="student-form-container">
      <form className="student-form">
        <h2>Add Book</h2>
        <div className="form-group">
          <label htmlfor="book">Book Name:</label>
          <input
            type="text"
            name="book"
            id="book"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlfor="Author">Author Name</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlfor="image">Image Url</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
