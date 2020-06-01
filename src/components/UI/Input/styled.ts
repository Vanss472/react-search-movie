import styled from "styled-components"
import { rem } from "../../utils/mixins"

export const InputWrapper = styled.div`
  width: 100%;
`

export const InputField = styled.input`
  padding-top: ${props => props.theme.spacing.padding};
  padding-bottom: ${props => props.theme.spacing.padding};
  padding-right: ${rem(40)};
  padding-left: ${rem(40)};
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  position: relative;
  width: 100%;
  height: ${props => props.theme.form.inputHeight};
  border: 0;
  border-radius: ${props => props.theme.border.borderRadius};
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.background};
  appearance: none;

  ::placeholder {
    color: ${props => props.theme.colors.lightGrey};
  }
`
