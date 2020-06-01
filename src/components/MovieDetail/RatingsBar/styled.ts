import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { rem } from "../../utils/mixins"
import FavoriteButton from "../../FavoriteButton"

export const FavBtn = styled(FavoriteButton)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: ${rem(0)};
  padding-bottom: ${rem(0)};
  padding-right: ${rem(12)};
  padding-left: ${rem(12)};
  border: 1px solid ${props => props.theme.colors.midGrey};
  border-radius: ${props => props.theme.border.borderRadius};
  background-color: ${props => props.theme.colors.background};
  font-size: ${rem(16)};
  line-height: ${rem(21)};
  letter-spacing: 0.17px;
  font-weight: ${props => props.theme.font.fWMedium};
  color: ${props => props.theme.colors.lightGrey};

  ${media.desktop} {
    padding-right: ${rem(16)};
  }

  &:hover {
    transition: ${props => props.theme.transition.primary};
    border-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.main};

    > svg {
      path {
        stroke: currentColor;
      }
    }
  }

  &.is-added {
    border-color: ${props => props.theme.colors.red};
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.main};

    > svg {
      path {
        fill: ${props => props.theme.colors.main};
      }
    }
  }

  span {
    display: none;

    ${media.desktop} {
      display: block;
    }
  }

  > svg {
    ${media.desktop} {
      margin-right: ${rem(12)};
    }
  }
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${rem(22)};
  margin-bottom: ${rem(22)};
  display: flex;
  max-width: ${rem(419)};

  ${media.desktop} {
    margin-top: var(--desktop-spacing-alt);
    margin-bottom: calc(var(--desktop-spacing) * 2);
  }
`

export const ListItem = styled.li`
  margin-right: ${rem(12)};

  ${media.desktop} {
    margin-right: ${rem(16)};
  }

  &:last-child {
    margin-right: 0;

    ${media.desktop} {
      flex-grow: 1;
    }
  }
`
