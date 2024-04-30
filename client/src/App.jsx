import "./App.css";
import { Outlet } from "react-router-dom";
import { UserConnectionProvider } from "./Contextes/ConnectionContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Banniere from "./components/Banniere";

function App() {
  return (
    <UserConnectionProvider>
      <NavBar />
      <Banniere />
      <Outlet />
      <Footer />
    </UserConnectionProvider>
  );
}

export default App;
