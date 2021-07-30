import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { exampleReducer } from '../../modules/Game'
import { robotReducer } from '../../modules/Robot'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    example: exampleReducer,
    robot: robotReducer,
  })

export default rootReducer
