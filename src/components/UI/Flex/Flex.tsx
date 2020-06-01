import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  padding-right: var(--rl-mobile-spacing);
  padding-left: var(--rl-mobile-spacing);
`

interface FlexProps {
  className?: string | undefined
  children: React.ReactNode
}
const Flex: React.FunctionComponent<FlexProps> = ({ children, className }: FlexProps) => (
  <Container className={className}>{children}</Container>
)

export default Flex
