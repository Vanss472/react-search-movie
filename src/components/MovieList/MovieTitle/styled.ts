import styled from "styled-components"
import { rem } from "../../utils/mixins"

export const Title = styled.h2`
  font-weight: ${props => props.theme.font.fWMedium};
  font-size: ${rem(20)};
  line-height: ${rem(26)};
  letter-spacing: 0.22px;
  color: ${props => props.theme.colors.main};
  margin-top: 0;
  margin-bottom: ${rem(4)};
`
