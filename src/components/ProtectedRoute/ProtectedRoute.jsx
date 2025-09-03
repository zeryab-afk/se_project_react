// src/components/ProtectedRoute/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;