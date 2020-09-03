import React, { useContext, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Article from "./article"
import { List, Button } from "@material-ui/core"
import Context from "./context.js"
import { loadMore } from "./api"

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

const Page = () => {
  const classes = useStyles()
  const { state, dispatch } = useContext(Context)

  const loadMoreOnClick = () => {
    dispatch({ type: "loadMore" })
  }

  useEffect(() => {
    loadMore(state.currentKeyword, state.currentPage, (articles, page) => {
      dispatch({
        type: "updateArticles",
        payload: articles,
      })
    })
  }, [state.currentPage, state.currentKeyword])

  return (
    <div hidden={!state.page}>
      <List className={classes.articles}>
        {state.currentArticles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.loadMore}
        onClick={loadMoreOnClick}
      >
        LOAD MORE
      </Button>
    </div>
  )
}

export default Page
