
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar2";


function App() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default App;
