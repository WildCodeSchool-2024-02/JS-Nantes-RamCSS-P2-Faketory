import "./App.css";
import { Outlet } from "react-router-dom";
import { UserConnectionProvider } from './Contextes/ConnectionContext';
import NavBar from "./components/NavBar";

function App() {
  return (
    <UserConnectionProvider>
      <NavBar />
      <Outlet />
    </UserConnectionProvider>
  );
}

export default App;
