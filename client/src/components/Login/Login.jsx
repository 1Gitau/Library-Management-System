import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "sonner";
import userStoreDetails from "../../Store/userStoreDetails.js";
import apiUrl from "../../utils/apiUrl.js";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Default to empty string to enforce selection
  const [roleError, setRoleError] = useState(false); // State to track role selection error
  const setUser = userStoreDetails((state) => state.setUser);

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: async function (userObject) {
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      return response.json();
    },

    onSuccess: (data) => {
      setUser(data.user);
      toast.success("Login successful");

      setTimeout(() => {
        if (data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/home");
        }
      }, 2000);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      setRoleError(true); // Show error if role is not selected
      return;
    }
    setRoleError(false); // Reset error if role is valid
    mutate({ email, password, role });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Role Select */}
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select a role</option> {/* Placeholder */}
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          {roleError && <p className="error-message">Please select a role.</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-login" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {isError && <p className="error-message">{error.message}</p>}
    </div>
  );
}
