import React from "react"
import MovieTitle from "../MovieTitle"
import MovieYear from "../MovieYear"
import * as P from "./styled"
import { Link } from "gatsby"
import IconFavorite from "../../UI/Icons/IconFavorite"

type PosterImageProps = {
  item: {
    imdbID: string
    Poster: string
    Title: string
    Year: string
  }
}

const PosterImage: React.FunctionComponent<PosterImageProps> = ({ item }: PosterImageProps) => {
  return (
    <P.Container>
      <img
        src={item.Poster === `N/A` ? `https://placehold.it/280x406&text=Image+Not+Found` : item.Poster}
        alt={item.Poster === `N/A` ? `Poster Image not found for ` + item.Title : `Poster Image for ` + item.Title}
      />
      <P.Overlay className="favorite-title-wrapper">
        <P.IconWrapper>
          <P.FavBtn id={`posterFavBtn-${item.imdbID}`} prepend={<IconFavorite width={24} height={24} />} />
        </P.IconWrapper>
        <P.TitleYearWrapper>
          <Link to={`/movie/${item.imdbID}`}>
            <MovieTitle movieTitle={item.Title} />
          </Link>
          <MovieYear movieYear={item.Year} />
        </P.TitleYearWrapper>
      </P.Overlay>
    </P.Container>
  )
}

export default PosterImage
