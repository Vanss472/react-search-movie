import styled from "styled-components"
import { rem } from "../../../utils/mixins"

export const Container = styled.div`
  display: flex;
  border-radius: ${props => props.theme.border.borderRadius};
  border: 1px solid ${props => props.theme.border.borderColor};
`

export const Source = styled.div`
  padding-top: ${rem(8)};
  padding-bottom: ${rem(8)};
  padding-right: ${rem(8)};
  padding-left: ${rem(8)};

  &.bg-yellow {
    background-color: ${props => props.theme.colors.yellow};
  }

  &.bg-red {
    background-color: ${props => props.theme.colors.red};
  }
`

export const Value = styled.p`
  margin: 0;
  padding-top: ${rem(8)};
  padding-bottom: ${rem(8)};
  padding-right: ${rem(8)};
  padding-left: ${rem(8)};
  color: ${props => props.theme.colors.main};
  font-size: ${rem(16)};
  line-height: ${rem(20)};
  letter-spacing: 0.17px;
  font-weight: ${props => props.theme.font.fWMedium};
`
