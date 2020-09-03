import React, { useState, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  CardActions,
  IconButton,
  Button
} from "@material-ui/core"
import Context from "./context"
import logo512 from "../assets/logo512.png"
import BookmarksIcon from "@material-ui/icons/Bookmarks"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 410,
    margin: 12,
    textAlign: "left",
  },
  media: {
    height: 140,
  },
}))

const Article = ({ article }) => {
  const classes = useStyles()
  const imgSrc = article.img || logo512
  const [preview, setPreview] = useState(true)
  const { state, dispatch } = useContext(Context)

  const BookmarkOnClick = () => {
    dispatch({
      type: "bookmark",
      payload: article,
    })
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => setPreview(!preview)}>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.headline.main}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {preview
              ? article.abstract.substring(0, 30) + "...more"
              : article.abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton
          onClick={BookmarkOnClick}
          color={
            state.bookmarkedArticles.includes(article) ? "secondary" : "default"
          }
        >
          <BookmarksIcon />
        </IconButton>
        <Button href={article.web_url}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Article
