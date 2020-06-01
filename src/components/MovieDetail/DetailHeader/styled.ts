import styled from "styled-components"
import { media } from "../../../styles/breakpoints"
import { rem } from "../../utils/mixins"

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${rem(22)};
  margin-bottom: ${rem(14)};

  ${media.desktop} {
    margin-top: var(--desktop-spacing-alt);
    margin-bottom: var(--desktop-spacing);
  }
`

export const ListItem = styled.li`
  display: inline-flex;
  color: ${props => props.theme.colors.lightGrey};
  font-size: ${rem(20)};
  line-height: ${rem(26)};
  letter-spacing: 0.22px;

  > span {
    display: block;
    padding-right: ${rem(8)};
    padding-left: ${rem(8)};
  }
`

export const Rated = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.border.borderRadius};
  font-size: ${rem(16)};
  line-height: ${rem(20)};
  letter-spacing: 0.17px;
  color: ${props => props.theme.colors.background};
  padding-right: ${rem(6)};
  padding-left: ${rem(6)};
  padding-top: ${rem(4)};
  padding-bottom: ${rem(4)};
`
