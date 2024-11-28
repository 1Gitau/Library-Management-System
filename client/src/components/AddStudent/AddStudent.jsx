import React from "react";
import "./AddStudent.css";

export default function AddStudent() {
  return (
    <div className="student-form-container">
      <form className="student-form">
        <h2>Add student</h2>
        <div className="form-group">
          <label htmlfor="roll">Roll No:</label>
          <input type="text" name="roll" id="roll" />
        </div>
        <div className="form-group">
          <label htmlfor="username">User Name</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="form-group">
          <label htmlfor="grade">Grade</label>
          <input type="text" name="grade" id="grade" />
        </div>
        <div className="form-group">
          <label htmlfor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
}
