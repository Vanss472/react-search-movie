import React from "react"
import * as L from "./styled"

type ListProps = {
  actors: string
  genre: string
  director: string
}

const List: React.FunctionComponent<ListProps> = ({ actors, genre, director }: ListProps) => {
  const actorsArr = actors.split(`, `)
  const genreArr = genre.split(`, `)
  const directorsArr = director.split(`, `)

  return (
    <L.Container>
      <L.Items>
        <L.Heading>Cast</L.Heading>
        <L.TextContainer>
          {actorsArr.map((actor, i) => (
            <p key={i}>{actor}</p>
          ))}
        </L.TextContainer>
      </L.Items>
      <L.Items>
        <L.Heading>Genre</L.Heading>
        <L.TextContainer>
          {genreArr.map((genre, i) => (
            <p key={i}>{genre}</p>
          ))}
        </L.TextContainer>
      </L.Items>
      <L.Items>
        <L.Heading>Director</L.Heading>
        <L.TextContainer>
          {directorsArr.map((director, i) => (
            <p key={i}>{director}</p>
          ))}
        </L.TextContainer>
      </L.Items>
    </L.Container>
  )
}

export default List
