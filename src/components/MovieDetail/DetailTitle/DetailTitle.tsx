import React from "react"
import styled from "styled-components"
import { rem } from "../../utils/mixins"
import { media } from "../../../styles/breakpoints"

const Heading = styled.h1`
  --main-heading: ${rem(24)};
  --main-heading-lh: ${rem(28)};
  margin-top: ${rem(14)};
  margin-bottom: ${rem(22)};
  font-weight: ${props => props.theme.font.fWBold};
  font-size: var(--main-heading);
  line-height: var(--main-heading-lh);
  letter-spacing: 0.87px;
  color: ${props => props.theme.colors.main};

  ${media.tablet} {
    --main-heading: ${rem(40)};
    --main-heading-lh: ${rem(48)};
  }

  ${media.desktop} {
    --main-heading: ${rem(80)};
    --main-heading-lh: ${rem(88)};
    margin-top: var(--desktop-spacing);
    margin-bottom: var(--desktop-spacing-alt);
  }
`

type DetailTitleProps = {
  detailTitle: string
}

const DetailTitle: React.FunctionComponent<DetailTitleProps> = ({ detailTitle }: DetailTitleProps) => (
  <Heading>{detailTitle}</Heading>
)

export default DetailTitle
