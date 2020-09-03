import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core/"
import Search from "./search"
import Cmnds from "./cmnds"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}))

const Nav = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          (Orbis AI) Coding Assignment
        </Typography>
        <Search />
        <div className={classes.grow} />
        <Cmnds />
      </Toolbar>
    </AppBar>
  )
}

export default Nav
