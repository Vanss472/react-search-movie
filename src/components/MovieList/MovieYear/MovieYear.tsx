import React from "react"
import * as M from "./styled"

type MovieYear = {
  movieYear: string
}

const MovieYear: React.FunctionComponent<MovieYear> = ({ movieYear }: MovieYear) => <M.Year>{movieYear}</M.Year>

export default MovieYear
