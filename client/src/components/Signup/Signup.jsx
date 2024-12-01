import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import apiUrl from "../../utils/apiUrl";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: async (userDetails) => {
      const response = await fetch(`${apiUrl}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (response.ok === false) {
        const error = await response.json();
        throw new Error(error.message);
      }
    },

    onSuccess: () => {
      toast.success("User Registered Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const newUser = {
      firstName,
      lastName,
      email,

      password,
    };

    mutate(newUser);
  }

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form">
        <label className="signup-label">First Name:</label>
        <input
          type="text"
          name="firstName"
          className="signup-input"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className="signup-label">Last Name:</label>
        <input
          type="text"
          name="lastName"
          className="signup-input"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className="signup-label">Email:</label>
        <input
          type="email"
          name="email"
          className="signup-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="signup-label">Password:</label>
        <input
          type="password"
          name="password"
          className="signup-input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="signup-label">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          className="signup-input"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="signup-button"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "Loading..." : "Signup"}
        </button>
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <span>
            <Link to="/login" className="text-blue-600">
              Login-here
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
