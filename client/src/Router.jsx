
import { createBrowserRouter } from "react-router-dom";
import Sniper from "./pages/Sniper";
import UserConnection from "./pages/UserConnection";
import FakeSchool from "./pages/FakeSchool";
import Create from "./pages/Create";
import BestOf from "./pages/BestOf";


import App from "./App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Sniper/>,
            },
            {
                path: "create",
                element: <Create />,
            },
            {
                path: "best-of",
                element: <BestOf />,
            },
            {
                path: "fakeschool",
                element: <FakeSchool />,
            },
            {
                path: "connexion",
                element: <UserConnection />,
            },
        ],
    },
]);

export default router;
