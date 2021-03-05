import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
`

interface ContainerProps {
  children: React.ReactNode
  movieId: string
}

const Container: React.FunctionComponent<ContainerProps> = ({ children, movieId }: ContainerProps) => (
  <Wrapper id={movieId}>{children}</Wrapper>
)

export default Container
