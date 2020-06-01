import React from "react"
import { RouteComponentProps } from "@reach/router"
import axios from "axios"

import Layout from "../Layout"
import SEO from "../Seo"
import MovieDetail from "../MovieDetail"
import Loading from "../Loading"
import ErrorNotice from "../ErrorNotice"

type MovieState = {
  movie: {
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
    Writer: string
    Actors: string
    Director: string
    Genre: string
    Poster: string
  }
  isLoading: boolean
  hasError: boolean
}

interface MovieProps extends RouteComponentProps {
  movieId?: string
}

class Movie extends React.Component<MovieProps, MovieState> {
  state: MovieState = {
    movie: {
      imdbID: ``,
      Runtime: ``,
      Year: ``,
      Rated: ``,
      Title: ``,
      Ratings: [],
      Plot: ``,
      Writer: ``,
      Actors: ``,
      Director: ``,
      Genre: ``,
      Poster: ``,
    },
    isLoading: false,
    hasError: false,
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    })

    const id = this.props.movieId

    axios
      .get(`${process.env.API}?i=${id}&apikey=${process.env.API_KEY}`)
      .then(result => {
        // console.log(result.data)
        this.setState({
          isLoading: false,
          movie: result.data,
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          isLoading: false,
          hasError: true,
        })
      })
  }

  render() {
    const { movie, isLoading, hasError } = this.state

    if (isLoading) <Loading />

    if (hasError) <ErrorNotice />

    return (
      <Layout>
        <SEO title="Movie Detail" />
        <MovieDetail data={movie} />
      </Layout>
    )
  }
}

export default Movie
