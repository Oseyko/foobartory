import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ConnectedRouter } from 'connected-react-router'

import history from './utils/setupHistory'
import Router from './router/router'
import theme from './themes/theme'
import { GlobalStyle } from './utils/globalStyle'

const Content = styled.div`
  background-color: ${props => props.theme.colors.neutralColor900};
  padding: 0;
  margin: 0;
  display: flex;
  overflow-y: auto;
  flex: 1;
`

const Container = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
`

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <div id="confirm-container" />
            <Content>
              <Router />
            </Content>
          </Container>
        </ThemeProvider>
      </ConnectedRouter>
    </React.StrictMode>
  )
}

export default App
