import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import Nav from "./nav"
import Footer from "./footer"
import Page from "./page"
import BookmarkPage from "./bookmark-page"
import { ContextProvider } from "./context"

const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: "center",
    backgroundColor: "#282c34",
    minHeight: "100vh",
    color: "white",
  },
  divider: {
    margin: 10,
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <ContextProvider>
      <Box
        className={classes.home}
        flexDirection="column"
        display="flex"
        alignItems="center"
        flexGrow={1}
      >
        <Nav />
        <Page />
        <BookmarkPage />
        <Footer />
      </Box>
    </ContextProvider>
  )
}

export default Home
