import styled from 'styled-components'

import { Wrapper } from '../../components/globals'

export const ActivityStatus = styled.div<{ active: boolean }>`
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  background-color: ${props =>
  props.active ? props.theme.colors.successColor500 : props.theme.colors.errorColor500};
`
export const ActivityDescription = styled.span`
  font-weight: 700;
`
export const RobotWrapper = styled(Wrapper)<{ active: boolean }>`
  background-color: ${props =>
  props.active ? props.theme.colors.secondaryColor700 : props.theme.colors.secondaryColor900};
  border-radius: 0.3rem;
`
