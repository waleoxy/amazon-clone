import React, { createContext, useContext, useReducer } from "react"

//prepare data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pull information like the consumer
export const useStateValue = () => useContext(StateContext);
