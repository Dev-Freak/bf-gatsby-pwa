import React, { createContext, useReducer } from "react"
import { initialState, reducer } from "./reducer"

export const Store = createContext(initialState)

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

export default StoreProvider
