import { Navigate } from "react-router-dom";
import userDetailsStore from "../Store/userStoreDetails";

function ProtectedRoute({ children, roleRequired }) {
  const user = userDetailsStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roleRequired && user.role !== roleRequired) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
