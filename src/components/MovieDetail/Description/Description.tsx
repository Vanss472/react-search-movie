import React from "react"
import styled from "styled-components"
import { rem } from "../../utils/mixins"
import { media } from "../../../styles/breakpoints"

const TextContainer = styled.p`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(20)};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  letter-spacing: 0.17px;
  font-weight: ${props => props.theme.font.fWRegular};
  color: ${props => props.theme.colors.main};

  ${media.desktop} {
    margin-bottom: ${rem(40)};
  }
`

const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: ${rem(8)};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  letter-spacing: 0.17px;
  font-weight: ${props => props.theme.font.fWMedium};
  color: ${props => props.theme.colors.lightGrey};
`

type DescriptionProps = {
  description: string
}

const Description: React.FunctionComponent<DescriptionProps> = ({ description }: DescriptionProps) => (
  <>
    <Heading>Plot</Heading>
    <TextContainer>{description}</TextContainer>
  </>
)

export default Description
