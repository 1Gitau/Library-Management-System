import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userStoreDetails from "../../Store/userStoreDetails.js";
import apiUrl from "../../utils/apiUrl.js";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      if (response.ok === false) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      console.log(data);
      return data;
    },

    onSuccess: (data) => {
      setUser(data.user);
      toast.success("login successful");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    mutate({ email, password });
  }

  return (
    <div>
      <div className="signup-container">
        <h2>Welcome back!</h2>
        <form className="signup-form">
          <label className="signup-label">Email</label>
          <input
            type="text"
            name="Email"
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
          <button
            type="submit"
            className="signup-button"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Login
          </button>
          <p className="mt-2 text-center">
            Already have an account?{" "}
            <span>
              <Link to="/signup" className="text-blue-600">
                signup
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
