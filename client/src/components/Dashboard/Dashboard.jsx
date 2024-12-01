import React, { useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  // const [student,setStudent] = useState(0);
  // const [admin,setAdmin] = useState(0);
  // const [book,setBook] = useState(0);
  // useEffect(()=>{

  // }, [])

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Book</h2> <br />
        <h2></h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Students</h2> <br />
        <h2></h2>
      </div>
      {/* <div className="dashboard-box">
        <h2>Total Admin</h2> <br />
        <h2></h2>
      </div> */}
    </div>
  );
};

export default Dashboard;
