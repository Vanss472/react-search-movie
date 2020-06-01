import styled from "styled-components"
import { rem } from "../../utils/mixins"

export const Year = styled.p`
  font-weight: ${props => props.theme.font.fWRegular};
  font-size: ${rem(16)};
  line-height: ${rem(21)};
  letter-spacing: 0.17px;
  color: ${props => props.theme.colors.main};
  margin: 0;
`
