// setting up the data layer
// i.e to tacker user
// also to tacke bakset

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //This is a DATA layer

// Build a PROVIDER to wrap the entire app insider this provider and give a access to the datalayer we created

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside component
export const useStateValue = () => useContext(StateContext);
