import { createContext, useState } from "react";

export const UserConnectionContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserConnectionProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState(null);

  // eslint-disable-next-line no-shadow
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
        if (data.token) {
          localStorage.setItem("token", data.token);
          setIsConnected(true);
          setUsername(username);
        } else {
          throw new Error("Authentication failed");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
        throw error;
      });

  return (
    <UserConnectionContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{ isConnected, handleLogin, username }}
    >
      {children}
    </UserConnectionContext.Provider>
  );
}
