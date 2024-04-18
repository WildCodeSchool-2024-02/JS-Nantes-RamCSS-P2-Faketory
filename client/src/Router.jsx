
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import NavBar2 from "./components/NavBar2";
import Sniper from "./pages/Sniper";
import UserConnection from "./pages/UserConnection";
import FakeSchool from "./pages/FakeSchool";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <NavBar2 />
                <main>
                    <Sniper />
                </main>
            </>
        ),
    },
    {
        path: "/fakeschool",
        element: (
            <>
                <NavBar2 />
                <main>
                    <FakeSchool />
                </main>
            </>
        ),
    },
    {
        path: "/connexion",
        element: (
            <>
                <NavBar2 />
                <main>
                    <UserConnection />
                </main>
            </>
        ),
    },
]);

// eslint-disable-next-line import/prefer-default-export
export function AppRouter() {
  return <RouterProvider router={router} />
}