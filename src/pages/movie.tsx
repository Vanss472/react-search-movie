import React from "react"
import { Router } from "@reach/router"

import Home from "../components/Home"
import Movie from "../components/Movie"

const MoviePage: React.FunctionComponent = () => (
  <Router>
    <Home path="/" />
    <Movie path="/movie/:movieId" />
  </Router>
)

export default MoviePage
