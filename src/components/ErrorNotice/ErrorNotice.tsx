import React from "react"
import Container from "../UI/Container"
import Flex from "../UI/Flex"

const ErrorNotice: React.FunctionComponent = () => (
  <Container>
    <Flex>
      <p aria-live="polite" aria-atomic="true">
        Something went wrong. Please search for a movie.
      </p>
    </Flex>
  </Container>
)

export default ErrorNotice
