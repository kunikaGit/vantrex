
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { PublicRoute } from "./authRoute";

import MainLayout from "../components/layout/Layout";
import Home from "../pages/home";
import Login from "../pages/login";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {path: "/", element: <Home />},
        {path: "/login", element: <Login />},
        // {path: "/forget",element: <ForgetPassword />},
        // {path: "/verify",element: <VerifyEmail/>}
      ],
    },
    // {
    //   element: <PrivateRoute />,
    //   children: [
    //     {
    //       path: "/admin",
    //       element: <AdminLayout />,
    //       children: RoutesArray,
    //     },
    //   ],
    // },
    // Fallback route - redirect to login or dashboard based on auth status
    // {
    //   path: "/",
    //   element: <NavigateToAppropriateRoute />,
    // },
    // 404 route
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return (
      <RouterProvider router={router} />
  );
};

// Helper component for root path
// const NavigateToAppropriateRoute = () => {
//  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   return isAuthenticated ? (
//     <Navigate to="/admin" replace />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// 404 Component
// const NotFound = () => {
//  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//       {isAuthenticated ? (
//         <Navigate to="/admin" replace />
//       ) : (
//         <Navigate to="/login" replace />
//       )}
//     </div>
//   );
// };

export default Router;