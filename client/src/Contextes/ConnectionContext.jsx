import { createContext, useState } from "react";

export const UserConnectionContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserConnectionProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);

  const handleLogin = (username, password) =>
    fetch("http://localhost:3001/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsConnected(true);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
      });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserConnectionContext.Provider value={{ isConnected, handleLogin }}>
      {children}
    </UserConnectionContext.Provider>
  );
}
