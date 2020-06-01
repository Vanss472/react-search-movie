import styled from "styled-components"
// import { media } from "../../../styles/breakpoints"
// import { rem } from "../../utils/mixins"
import FavoriteButton from "../../FavoriteButton"

export const Container = styled.div`
  position: relative;
  box-shadow: 0 4px 30px 0 rgba(5, 10, 13, 0.3);
  border-radius: ${props => props.theme.border.borderRadius};
  overflow: hidden;

  &:hover {
    > div {
      display: flex;
      flex-direction: column;
    }

    > img {
      filter: blur(2px);
    }
  }
`

export const Overlay = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: ${props => props.theme.spacing.padding};
  opacity: 0.9;
  background-color: var(--hover);
  transition: ${props => props.theme.transition.primary};
  z-index: 3;
`

export const IconWrapper = styled.div`
  flex-grow: 1;
  align-self: flex-end;
  color: ${props => props.theme.colors.main};
`
export const TitleYearWrapper = styled.div`
  > a {
    position: relative;
    display: block;
    text-decoration: none;
    background-position-y: -0%;
    background-image: linear-gradient(var(--hover) 50%, rgba(255, 255, 255, 0.4) 50%);
    transition: background 0.3s ease-in-out;
    background-size: auto 200%;

    &:hover {
      background-position-y: 10%;
    }
  }
`
export const FavBtn = styled(FavoriteButton)`
  display: flex;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  color: ${props => props.theme.colors.lightGrey};

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
    > svg {
      path {
        stroke: ${props => props.theme.colors.main};
        fill: ${props => props.theme.colors.main};
      }
    }
  }

  span {
    display: none;
  }
`
