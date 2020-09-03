import React, { createContext, useReducer } from "react"

const initialState = {
  currentArticles: [],
  currentPage: 0,
  currentKeyword: "",
  bookmarkedArticles: [],
  page: true,
}

const Context = createContext(initialState)
const { Provider } = Context

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "search":
        return {
          ...state,
          currentKeyword: action.payload,
          currentPage: 0,
          currentArticles: [],
        }
      case "loadMore":
        return { ...state, currentPage: state.currentPage + 1 }
      case "updateArticles":
        return {
          ...state,
          currentArticles: state.currentArticles.concat(action.payload),
        }
      case "bookmark":
        if (state.bookmarkedArticles.includes(action.payload))
          return {
            ...state,
            bookmarkedArticles: state.bookmarkedArticles.filter(
              (value, index) => {
                return value !== action.payload
              }
            ),
          }
        else
          return {
            ...state,
            bookmarkedArticles: state.bookmarkedArticles.concat([
              action.payload,
            ]),
          }
      case "page":
        return { ...state, page: !state.page }
      default:
        throw new Error("no action")
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export default Context
