import styled from "styled-components"
import { rem } from "../utils/mixins"
import Input from "../UI/Input"
import Button from "../UI/Button/Button"

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const IconWrapper = styled.label`
  height: 100%;
  padding-right: ${props => props.theme.spacing.padding};
  padding-left: ${props => props.theme.spacing.padding};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
`

export const InputStyled = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

export const ButtonStyled = styled(Button)`
  position: relative;
  z-index: 1;
  border-top-right-radius: ${props => props.theme.border.borderRadius};
  border-bottom-right-radius: ${props => props.theme.border.borderRadius};
  padding-right: ${rem(10)};
  padding-left: ${rem(10)};
  border: 0;
  background-color: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.background};
`
