import { createContext, useState } from "react";
export let ConvIdChatContext = createContext({});

export function ChatConvIdProvider({ children }) {
  let [convId, setConvId] = useState("");
  return (
    <ConvIdChatContext.Provider value={{ convId, setConvId }}>
      {children}
    </ConvIdChatContext.Provider>
  );
}
