import React, { useContext, useState } from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import { InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import Context from "./context.js"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

const Search = () => {
  const classes = useStyles()
  const [keyword, setKeyword] = useState("")
  const { state, dispatch } = useContext(Context)

  const searchOnSubmit = (event) => {
    if (state.currentKeyword !== keyword)
      dispatch({ type: "search", payload: keyword })
    event.preventDefault()
  }

  return (
    <div className={classes.root}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form onSubmit={searchOnSubmit}>
        <InputBase
          name="search"
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
