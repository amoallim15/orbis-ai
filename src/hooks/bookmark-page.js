import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Article from "./article"
import { List } from "@material-ui/core"
import Context from "./context.js"

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
  articles: {
    color: "white",
    margin: 12,
  },
  loadMore: {
    width: 410,
  },
}))

const BookmarkPage = () => {
  const classes = useStyles()
  const { state } = useContext(Context)

  return (
    <div hidden={state.page}>
      <List className={classes.articles}>
        {state.bookmarkedArticles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </List>
    </div>
  )
}

export default BookmarkPage
