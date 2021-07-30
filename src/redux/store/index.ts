import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import { rootReducer } from 'redux/reducers'
import { initGameState } from 'modules/Game/game.reducers'

import { RootState } from '../types'
import history from '../../utils/setupHistory'
import { initRobotState } from '../../modules/Robot/robot.reducers'

// Initialize the state of the application
export const init: RootState = {
  example: initGameState,
  robot: initRobotState
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function store(initialState: RootState = init) {
  // Create sagas watcher
  const sagaMiddleware = createSagaMiddleware()
  const connectedRouterMiddleware = routerMiddleware(history)
  const middleware = [sagaMiddleware, connectedRouterMiddleware]

  return {
    ...createStore(rootReducer(history), initialState, composeWithDevTools(applyMiddleware(...middleware))),
    runSaga: sagaMiddleware.run,
  }
}

export default store
