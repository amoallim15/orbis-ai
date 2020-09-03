import React, { useContext } from "react"
import { IconButton, Box } from "@material-ui/core"
import BookmarksIcon from "@material-ui/icons/Bookmarks"
import Context from "./context.js"

const Cmnds = () => {
  const { state, dispatch } = useContext(Context)
  const togglePageOnClick = () => {
    dispatch({ type: "page" })
  }

  return (
    <Box display="flex">
      <IconButton
        color={state.page ? "inherit" : "secondary"}
        onClick={togglePageOnClick}
      >
        <BookmarksIcon />
      </IconButton>
    </Box>
  )
}

export default Cmnds
