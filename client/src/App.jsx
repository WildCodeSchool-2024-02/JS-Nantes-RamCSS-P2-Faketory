import "./App.css";
import { Outlet } from "react-router-dom";
import { UserConnectionProvider } from './Contextes/ConnectionContext';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <UserConnectionProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </UserConnectionProvider>
  );
}

export default App;
