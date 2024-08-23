import DashboardLayout from "@/layout/DashboardLayout";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from 'sonner';
import './App.css';

function App() {
  let user = true;

  const RouteGuard = ({ isPublic }) => {
    if (isPublic ? user : !user) {
      return <Navigate to={isPublic ? "/" : "/auth"} replace />;
    }
    return <Outlet />;
  };

  console.log('first')

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
          path: '/',
          element: (
            <RouteGuard isPublic={false}>
              <DashboardLayout />
            </RouteGuard>
          ),
          children: [
            {
              index: true,
              lazy: async () => {
                const module = await import("@/pages/Dashboard");
                return { Component: module.default };
              },
            },
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