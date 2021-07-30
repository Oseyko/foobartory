import styled from 'styled-components'

import {
  ASSEMBLE_FOOBAR_NAME,
  MINE_BAR_NAME,
  MINE_FOO_NAME,
} from '../../modules/Robot/robot.constants'

interface IStyledButton {
  variant?: string
  width?: string
}
export const StyledButton = styled.button<IStyledButton>`
  color: ${props => (props.disabled ? props.theme.colors.whiteAlpha50 : props.theme.colors.white)};
  border: none;
  padding: 0.5rem;
  border-radius: 3px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-weight: 700;
  font-family: ${props => props.theme.fonts.primary};
  justify-content: center;
  display: flex;
  width: ${props => props.width};
  align-items: center;
  background-color: ${props => props.theme.colors.primaryColor700};

  &:hover {
    background-color: ${props => {
      if (props.disabled) return props.theme.colors.whiteAlpha50
      return props.theme.colors.primaryColor900
    }};
  }
  &:disabled {
    background-color: ${props => {
      if (props.variant === MINE_FOO_NAME) return props.theme.colors.warningColor300
      if (props.variant === MINE_BAR_NAME) return props.theme.colors.errorColor300
      if (props.variant === ASSEMBLE_FOOBAR_NAME) return props.theme.colors.successColor300
      return props.theme.colors.neutralColor900
    }};
    color: ${props => {
      if (props.variant === MINE_FOO_NAME) return props.theme.colors.neutralColor700
      if (props.variant === MINE_BAR_NAME) return props.theme.colors.neutralColor700
      if (props.variant === ASSEMBLE_FOOBAR_NAME) return props.theme.colors.neutralColor700
      return props.theme.colors.whiteAlpha10
    }};
  }
`
