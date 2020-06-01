import React from "react"
import IconLogoImdb from "../../../UI/Icons/IconLogoImdb"
import IconRottenTomatoes from "../../../UI/Icons/IconRottenTomatoes"
import * as R from "./styled"

type RatingProps = {
  rating: {
    Source: string
    Value: string
  }
}
const Rating: React.FunctionComponent<RatingProps> = ({ rating }: RatingProps) => {
  const imdb = rating.Source === `Internet Movie Database`
  const rottenT = rating.Source === `Rotten Tomatoes`
  const classes = imdb ? `bg-yellow` : rottenT ? `bg-red` : ``

  return (
    <R.Container>
      <R.Source className={classes}>{imdb ? <IconLogoImdb /> : rottenT ? <IconRottenTomatoes /> : null}</R.Source>
      <R.Value>{rating.Value}</R.Value>
    </R.Container>
  )
}

export default Rating
