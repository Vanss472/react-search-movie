import styled from "styled-components"
import { Link } from "gatsby"
import Flex from "../UI/Flex"
import Image from "../UI/Image"
import { media } from "../../styles/breakpoints"
import { rem } from "../utils/mixins"

export const BackBtn = styled(Link)`
  display: inline-flex;
  padding-right: var(--rl-mobile-spacing);
  padding-left: var(--rl-mobile-spacing);
  margin-bottom: var(--rl-mobile-spacing);

  ${media.tablet} {
    margin-bottom: 0;
  }

  &:hover {
    > svg {
      path {
        stroke: ${props => props.theme.colors.main};
      }
    }
  }
`

export const Grid = styled(Flex)`
  padding-right: var(--rl-mobile-spacing);
  padding-left: var(--rl-mobile-spacing);
  flex-direction: column;
  width: 100%;

  ${media.tablet} {
    flex-direction: row;
  }

  .left-container {
    order: 2;

    ${media.tablet} {
      order: 1;
      flex-basis: calc((100% / 12 * 7));
      margin-right: ${rem(20)};
      padding-right: calc((100% / 12 * 1));
    }
  }

  .right-container {
    order: 1;

    ${media.tablet} {
      order: 2;
      flex-basis: calc((100% / 12 * 5));
    }
  }
`

export const PosterImg = styled(Image)`
  border-radius: ${rem(8)};
`
