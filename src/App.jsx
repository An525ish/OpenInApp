import DashboardLayout from "@/layout/DashboardLayout";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from 'sonner';
import './App.css';
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);

  const RouteGuard = ({ isPublic }) => {
    if (isPublic ? user : !user) {
      return <Navigate to={isPublic ? "/" : "/auth"} replace />;
    }
    return <Outlet />;
  };

  let router = createBrowserRouter([
    {
      path: '/',
      element: <Outlet />,
      children: [
        {
          element: <RouteGuard isPublic={true} />,
          children: [
            {
              path: '/auth',
              lazy: async () => {
                const module = await import("@/pages/Auth");
                return { Component: module.default };
              }
            },
          ],
        },
        {
          element: <RouteGuard isPublic={false} />,
          children: [
            {
              path: '/',
              element: <DashboardLayout />,
              children: [
                {
                  index: true,
                  lazy: async () => {
                    const module = await import("@/pages/Dashboard");
                    return { Component: module.default };
                  },
                },

              ],
            }
          ],
        },
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App