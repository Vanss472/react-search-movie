import React from "react"
import Container from "../UI/Container"
import Flex from "../UI/Flex"
import IconLoader from "../UI/Icons/IconLoader"

const Loading: React.FunctionComponent = () => (
  <Container>
    <Flex>
      <div className="loader">
        <IconLoader />
      </div>
    </Flex>
  </Container>
)

export default Loading
