import styled from "styled-components"
import { rem } from "../utils/mixins"

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: ${rem(20)};
  list-style: none;
  padding-right: var(--rl-mobile-spacing);
  padding-left: var(--rl-mobile-spacing);
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`
