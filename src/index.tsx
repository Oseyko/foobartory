import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import setupIconLibrary from './utils/setupIconLibrary'
import { store } from './redux/store'
import rootSagas from './redux/sagas'

setupIconLibrary()
const mainStore = store()
mainStore.runSaga(rootSagas)

const Index = () => (
  <React.StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(<Index />, document.getElementById('root'))
