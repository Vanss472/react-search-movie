import React from "react"
import * as M from "./styled"

type MovieTitleProps = {
  movieTitle: string
}
const MovieTitle: React.FunctionComponent<MovieTitleProps> = ({ movieTitle }: MovieTitleProps) => (
  <M.Title>{movieTitle}</M.Title>
)

export default MovieTitle
