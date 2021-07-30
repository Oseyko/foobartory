import styled from 'styled-components'

import { ASSEMBLE_FOOBAR_NAME, MINE_BAR_NAME, MINE_FOO_NAME } from '../Robot/robot.constants'

export const Stat = styled.div<{ type: string }>`
  font-weight: 900;
  font-size: 2rem;
  padding: 0.5rem;
  text-align: center;
  color: ${props => {
    if (props.type === MINE_FOO_NAME) return props.theme.colors.warningColor300
    if (props.type === MINE_BAR_NAME) return props.theme.colors.errorColor300
    if (props.type === ASSEMBLE_FOOBAR_NAME) return props.theme.colors.successColor300
    return props.theme.colors.white
  }};
  & span {
    color: ${props => props.theme.colors.white};
    padding: 0 0.3rem;
  }
`

export const ColoredSpan = styled.span<{ type: string }>`
  padding: 0 0.5rem;
  font-weight: 700;
  color: ${props => {
    if (props.type === MINE_FOO_NAME) return props.theme.colors.warningColor300
    if (props.type === MINE_BAR_NAME) return props.theme.colors.errorColor300
    if (props.type === ASSEMBLE_FOOBAR_NAME) return props.theme.colors.successColor300
    return props.theme.colors.white
  }};
`
export const ScoreContainer = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: sticky;
  padding: 0 0.5rem 0.5rem 0.5rem;
  top: 0;
  background-color: ${props => props.theme.colors.whiteAlpha10};
`
