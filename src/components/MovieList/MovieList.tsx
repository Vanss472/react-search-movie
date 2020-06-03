import React from "react"
import PosterImage from "./PosterImage"
import * as M from "./styled"
import Container from "../UI/Container"

type MovieListProps = {
  items: {
    imdbID: string
    Poster: string
    Title: string
    Year: string
  }[]
}

const MovieList: React.FunctionComponent<MovieListProps> = ({ items }: MovieListProps) => (
  <Container>
    <M.List>
      {items.map(item => (
        <PosterImage key={item.imdbID} item={item} />
      ))}
    </M.List>
  </Container>
)

export default MovieList
