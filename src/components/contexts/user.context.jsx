import { createContext, useState } from "react";

// as the actual value you want to see
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const user_value = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider value={user_value}> {children}</UserContext.Provider>
  );
};
