import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { rem } from "../../utils/mixins"

export const Container = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin-top: ${rem(20)};
  margin-bottom: 0;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    flex-direction: row;
  }

  ${media.desktop} {
    margin-top: ${rem(40)};
  }
`

export const Items = styled.li`
  &:last-child {
    margin-right: 0;
  }

  ${media.tablet} {
    margin-right: ${rem(28)};
  }

  ${media.desktop} {
    margin-right: ${rem(56)};
  }
`

export const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: ${rem(8)};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  letter-spacing: 0.17px;
  font-weight: ${props => props.theme.font.fWMedium};
  color: ${props => props.theme.colors.lightGrey};
`

export const TextContainer = styled.div`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(20)};

  ${media.desktop} {
    margin-bottom: ${rem(40)};
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${rem(16)};
    line-height: ${rem(24)};
    letter-spacing: 0.17px;
    font-weight: ${props => props.theme.font.fWRegular};
    color: ${props => props.theme.colors.main};
  }
`
