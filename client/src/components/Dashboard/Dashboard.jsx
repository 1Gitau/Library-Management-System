import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import apiUrl from "../../utils/apiUrl";

const Dashboard = () => {
  const [databaseCounts, setDatabaseCounts] = useState({
    totalBooks: 0,
    totalStudents: 0,
    totalBorrowedBooks: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch(`${apiUrl}/books/counter`, {
          credentials: "include",
        });

        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch counts");
        }
        const data = await response.json();
        console.log(data);
        setDatabaseCounts({
          totalBooks: data.totalBooks,
          totalStudents: data.totalStudents,
          totalBorrowedBooks: data.totalBorrowedBooks,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []); // Run this effect once when the component is mounted

  if (loading) {
    return <div>Loading counts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Books</h2>
        <h2>{databaseCounts.totalBooks}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Students</h2>
        <h2>{databaseCounts.totalStudents}</h2>
      </div>
      {/* <div className="dashboard-box">
        <h2>Total Borrowed Books</h2>
        <h2>{
            databaseCounts.totalBorrowedBooks
          }</h2>
      </div> */}
    </div>
  );
};

export default Dashboard;
