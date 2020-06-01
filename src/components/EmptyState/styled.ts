import styled from "styled-components"
import { rem } from "../utils/mixins"

export const EmptyStateContainer = styled.div`
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - var(--empty-state));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-right: var(--rl-mobile-spacing);
  padding-left: var(--rl-mobile-spacing);
`

export const Icon = styled.img`
  max-width: 100%;
  width: 374px;
`

export const Heading = styled.h2`
  font-size: ${rem(24)};
  line-height: ${rem(28)};
  color: ${props => props.theme.colors.main};
  margin-top: ${rem(37)};
  margin-bottom: ${rem(8)};
`

export const SubHeading = styled.p`
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${props => props.theme.colors.lightGrey};
  margin: 0;
`
