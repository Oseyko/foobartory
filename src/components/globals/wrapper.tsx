import styled from 'styled-components'

interface IWrapper {
  flex?: number | string
  direction?: 'row' | 'column'
  alignItems?:
    | 'start'
    | 'end'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'inherit'
    | 'initial'
    | 'unset'
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'inherit'
    | 'initial'
    | 'unset'
  height?: string
  maxHeight?: string
  width?: string
  maxWidth?: string
  overflow?: string
  overflowY?: string
  padding?: string
  margin?: string
  gap?: string
  position?: string
}

export const Wrapper = styled.div<IWrapper>`
  flex: ${props => (props.flex ? props.flex : 1)};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.alignItems || 'start'};
  justify-content: ${props => props.justifyContent || 'start'};
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
  overflow: ${props => props.overflow};
  overflow-y: ${props => props.overflowY};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  gap: ${props => props.gap};
  position: ${props => props.position};;
`

export const MainContentWrapper = styled(Wrapper)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  
`
