// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AddStudent.css";
// import apiUrl from "../../utils/apiUrl";

// export default function AddStudent() {
//   const [formData, setFormData] = useState({
//     roll: "",
//     grade: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     // Log formData to verify before sending
//     console.log("Form Data being sent:", formData);

//     try {
//       const response = await fetch(`${apiUrl}/user/addstudent`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//         credentials: "include",
//       });

//       console.log(response)

//       if (!response.ok) {
//         throw new Error("Failed to add student. Please try again.");
//       }

//       const data = await response.json();
//       console.log("Response from backend:", data);

//       // Redirect to the dashboard on success
//       navigate("/dashboard");

//     } catch (error) {
//       setError(error.message);  // Set the error message
//       console.error("Error adding student:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="student-form-container">
//       <form className="student-form" onSubmit={handleSubmit}>
//         <h2>Add Student</h2>

//         {error && <p className="error-message">{error}</p>} {/* Display any error message */}

//         <div className="form-group">
//           <label htmlFor="roll">Roll :</label>
//           <input
//             type="text"
//             name="roll"
//             id="roll"
//             value={formData.roll}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="grade">Grade</label>
//           <input
//             type="text"
//             name="grade"
//             id="grade"
//             value={formData.grade}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <button type="submit" disabled={loading}>
//             {loading ? "Adding Student..." : "Add Student"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";
import apiUrl from "../../utils/apiUrl";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    roll: "",
    grade: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors

    console.log("Form Data being sent:", formData);

    try {
      const response = await fetch(`${apiUrl}/user/addstudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      console.log("Response status:", response.status);

      if (response.ok === false) {
        const errorData = await response.json();
        console.error("Error response body:", errorData);
        throw new Error(
          errorData || "Failed to add student. Please try again.",
        );
      }

      const data = await response.json();

      navigate("/dashboard");
    } catch (error) {
      const errorMessage =
        error.message || "An unexpected error occurred. Please try again.";
      setError(errorMessage); // Display error message
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error if exists */}
        <div className="form-group">
          <label htmlFor="roll">Roll:</label>
          <input
            type="text"
            name="roll"
            id="roll"
            value={formData.roll}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            name="grade"
            id="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Adding Student..." : "Add Student"}
          </button>
        </div>
      </form>
    </div>
  );
}
