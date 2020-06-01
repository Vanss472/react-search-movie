import React from "react"
import IconLogo from "../UI/Icons/IconLogo"
import Container from "../UI/Container"
import Flex from "../UI/Flex"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderWrapper = styled.header`
  margin-top: var(--desktop-spacing);
  margin-bottom: var(--desktop-spacing);
`

const Header: React.FunctionComponent<{}> = () => (
  <HeaderWrapper>
    <Container>
      <Flex>
        <Link to="/" aria-labelledby="logoTitle">
          <IconLogo />
        </Link>
      </Flex>
    </Container>
  </HeaderWrapper>
)

export default Header
