import React from "react"
import axios from "axios"
import { RouteComponentProps } from "@reach/router"
import Layout from "../Layout"
import SEO from "../Seo"
import SearchBar from "../SearchBar"
import EmptyState from "../EmptyState"
import ErrorNotice from "../ErrorNotice"

import MovieList from "../MovieList"
import Loading from "../Loading"

type HomeState = {
  searchBarInput: string | number | string[]
  movieSearch: {
    imdbID: string
    Title: string
    Year: string
    Poster: string
  }[]
  isLoading: boolean
  hasError: boolean
}

interface HomeProps extends RouteComponentProps {
  path?: string
}

class Home extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    searchBarInput: ``,
    movieSearch: [],
    isLoading: false,
    hasError: false,
  }

  // Update state with current search bar input
  searchBarHandler = e => {
    this.setState({
      searchBarInput: e.target.value,
    })
  }

  setEnter = e => {
    if (e.key === `Enter`) {
      this.setSearch()
    }
  }

  // Fetch movies information and update state
  setSearch = () => {
    this.setState(
      {
        movieSearch: [],
        isLoading: true,
        hasError: false,
      },
      () => {
        // Executed as callback function
        const title = this.state.searchBarInput

        axios
          .get(`${process.env.API}?s=${title}&apikey=${process.env.API_KEY}`)
          .then(result => {
            // console.log(result)
            // console.log(result.data.Search)
            if (result.data.Response === `True`) {
              this.setState({
                movieSearch: result.data.Search,
                isLoading: false,
              })
            } else {
              this.setState({
                isLoading: false,
                hasError: true,
              })
            }
          })
          .catch(error => {
            console.log(error)
            this.setState({
              isLoading: false,
              hasError: true,
            })
          })
      }
    )
  }

  render() {
    let movieContent = <EmptyState />

    if (this.state.isLoading) {
      movieContent = <Loading />
    } else if (this.state.hasError) {
      movieContent = <ErrorNotice />
    } else if (this.state.movieSearch !== null && this.state.movieSearch.length > 0) {
      movieContent = <MovieList items={this.state.movieSearch} />
    }

    return (
      <Layout>
        <SEO title="Search" />
        <SearchBar
          value={this.state.searchBarInput}
          onChangeHandler={this.searchBarHandler}
          onClickHandler={this.setSearch}
          onKeyDownHandler={this.setEnter}
        />
        {movieContent}
      </Layout>
    )
  }
}

export default Home
