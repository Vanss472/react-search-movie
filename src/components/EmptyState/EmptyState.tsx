import React from "react"
import EmptyStateIcon from "../../images/illustration-empty-state.svg"
import { EmptyStateContainer, Icon, Heading, SubHeading } from "./styled"

const EmptyState: React.FunctionComponent<{}> = () => (
  <EmptyStateContainer>
    <Icon src={EmptyStateIcon} alt="" />
    <Heading>Don’t know what to search?</Heading>
    <SubHeading>Here’s an offer you can’t refuse</SubHeading>
  </EmptyStateContainer>
)

export default EmptyState
