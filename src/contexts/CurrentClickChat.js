import { createContext, useState } from "react";
export let CurrentChatContext = createContext({});

export function ChatContextProvider({ children }) {
  let [currentChat, setCurrentChat] = useState("");

  return (
    <CurrentChatContext.Provider value={{ currentChat, setCurrentChat }}>
      {children}
    </CurrentChatContext.Provider>
  );
}
