import React from "react"
import Container from "../UI/Container"
import DetailHeader from "./DetailHeader"
import DetailTitle from "./DetailTitle"
import RatingsBar from "./RatingsBar"
import Description from "./Description"
import List from "./List"
import { BackBtn, Grid, PosterImg } from "./styled"
import IconBackButton from "../UI/Icons/IconBackButton"

type MovieDetailProps = {
  data: {
    imdbID: string
    Runtime: string
    Year: string
    Rated: string
    Title: string
    Ratings: {
      Source: string
      Value: string
    }[]
    Plot: string
    Actors: string
    Director: string
    Genre: string
    Poster: string
  }
}

const MovieDetail: React.FunctionComponent<MovieDetailProps> = ({ data }: MovieDetailProps) => (
  <Container>
    <BackBtn to="/">
      <IconBackButton width={24} height={24} />
    </BackBtn>
    <Grid>
      <div className="left-container">
        <DetailHeader runtime={data.Runtime} year={data.Year} rated={data.Rated} />
        <DetailTitle detailTitle={data.Title} />
        <RatingsBar id={data.imdbID} ratings={data.Ratings} />
        <Description description={data.Plot} />
        <List actors={data.Actors} genre={data.Genre} director={data.Director} />
      </div>
      <div className="right-container">
        <PosterImg imagePath={data.Poster} imageAlt={data.Title} />
      </div>
    </Grid>
  </Container>
)

export default MovieDetail
