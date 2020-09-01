import React from "react"
import Search from "./search"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Paper, List } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: "center",
    backgroundColor: "#282c34",
    minHeight: "100vh",
    color: "white",
  },
  divider: {
    margin: 10
  },
  articles: {
    width: 410,
    color: "white"
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <Box className={classes.home} flexDirection="column" display="flex" alignItems="center">
      <Search  />
      <List className={classes.articles}>
        Hello world
      </List>
    </Box>
  )
}

export default Home
