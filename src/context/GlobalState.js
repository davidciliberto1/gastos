import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State

const initialState = {
  transactions: [
    { id: 1, text: "Cafe", amount: -20 },
    { id: 2, text: "Sueldo", amount: 300 },
    { id: 3, text: "Libros", amount: -10 },
    { id: 4, text: "Camara", amount: 150 },
  ],
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Components

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

function deleteTransaction(id) {
  dispatch({
    type: "DELETE_TRANSACTION",
    payload: id
  });
}

  return (
    <GlobalContext.Provider value={{ 
      transactions: state.transactions,
      deleteTransaction
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
