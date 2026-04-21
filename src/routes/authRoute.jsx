import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoute = () => {

  const location = useLocation();
  const isAuthenticated = true;
  const isLoading = false; // Placeholder for loading state

  if (isLoading) {
    return <Loader open={isLoading}/>
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export const PublicRoute = () => {
  const check = true
  return check ? <Outlet /> : <Navigate to="/" />;
};
  